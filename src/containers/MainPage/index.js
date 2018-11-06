import React, { Component } from 'react';
import SearchResultsCard from '../../containers/SearchResultsCard';
import CourseInfoCard from '../../containers/CourseInfoCard';
import WeatherCard from '../../containers/WeatherCard';
import './MainPage.css';
import * as DataCleaner from '../../utilities/DataCleaner';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Route, Redirect } from 'react-router-dom';
import { setCourses } from '../../actions/courseActions';
import { toggleSearchResults } from '../../actions/searchResultsActions';
import { toggleCourseDetails } from '../../actions/courseDetailsActions';
import mockCoursesCleaned from '../../mockData/mockCoursesCleaned.js';
import mockWeather from '../../mockData/mockWeather.js'
import { fetchGolfCourses } from '../../Thunks/golfCourses.js'

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
		const { setCourses, toggleSearchResults, fetchGolfCourses } = this.props
		fetchGolfCourses(searchTerms);
		// const fetchedGolfCourses = await DataCleaner.fetchGolfCoursesByZip(searchTerms)
		// setCourses(fetchedGolfCourses)
		// setCourses(mockCoursesCleaned)
		toggleSearchResults()
	}

	render() {
		const { pageName, golfCourses, searchResultsSelected, courseDetailsSelected } = this.props;
		const { searchTerms, showWeather } = this.state;

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
										<WeatherCard weather={mockWeather}/>
									</div>
					}}/>
			</form>
		)
	}
}

export const mapStateToProps = ({ golfCourses, searchResultsSelected, courseDetailsSelected }) => ({ golfCourses, searchResultsSelected, courseDetailsSelected });

export const mapDispatchToProps = (dispatch) => ({
	fetchGolfCourses: (courses) => dispatch(fetchGolfCourses(courses)),	
	toggleSearchResults: () => dispatch(toggleSearchResults()),
	toggleCourseDetails: () => dispatch(toggleCourseDetails())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPage));