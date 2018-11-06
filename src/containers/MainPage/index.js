import React, { Component } from 'react';
import SearchResultsCard from '../../containers/SearchResultsCard';
import CourseInfoCard from '../../containers/CourseInfoCard';
import WeatherCard from '../../containers/WeatherCard';
import './MainPage.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Route, Redirect } from 'react-router-dom';
import { toggleSearchResults } from '../../actions/searchResultsActions';
import { toggleCourseDetails } from '../../actions/courseDetailsActions';
import { fetchGolfCourses } from '../../Thunks/golfCourses.js'
import { fetchWeather } from '../../Thunks/weather.js'

export class MainPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerms: '',
		}
	}

	handleInputChange = (e) => {
		this.setState({ searchTerms: e.target.value })
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.getGolfCourses(this.state.searchTerms)
		this.setState({ searchTerms: '' })
	}

	getGolfCourses = async (searchTerms) => {
		const { toggleSearchResults, fetchGolfCourses, fetchWeather } = this.props
		fetchGolfCourses(searchTerms);
		fetchWeather(searchTerms)
		toggleSearchResults()
	}

	render() {
		const { pageName, golfCourses, searchResultsSelected, weather } = this.props;
		const { searchTerms } = this.state;

		return(
			<form className='MainPage' onSubmit={this.handleSubmit}>
							<p className='page-name'>{pageName}</p>
							<input
								type='search' 
								placeholder='Search for a zip code or city' 
								className='search-input'
								value={searchTerms}
								onChange={this.handleInputChange}
							/>
								<button 
									type='submit' 
									className='submit-btn'>Submit
								</button>

					<Route exact path='/findcourses' render={() => {
						if (searchResultsSelected) {
							return <Redirect to='/findcourses/searchresults' />							
						} else {
								return null
						}
					}}/>

					<Route exact path='/findcourses/searchresults' render={() => {
						return <SearchResultsCard courses={golfCourses} />
					}} />
					
					<Route exact path='/findcourses/searchresults/courseinfo/:id' render={({match}) => {
						const selectedCourse = golfCourses.find(course => {
							return course.id === match.params.id
						})
						return <div className='course-weather-container'>
										<CourseInfoCard course={selectedCourse} />
										<WeatherCard weather={weather}/>
									</div>
					}}/>
			</form>
		)
	}
}

export const mapStateToProps = ({ golfCourses, searchResultsSelected, courseDetailsSelected, weather }) => ({ golfCourses, searchResultsSelected, courseDetailsSelected, weather });

export const mapDispatchToProps = (dispatch) => ({
	fetchGolfCourses: (courses) => dispatch(fetchGolfCourses(courses)),	
	fetchWeather: (weather) => dispatch(fetchWeather(weather)),	
	toggleSearchResults: () => dispatch(toggleSearchResults()),
	toggleCourseDetails: () => dispatch(toggleCourseDetails())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPage));