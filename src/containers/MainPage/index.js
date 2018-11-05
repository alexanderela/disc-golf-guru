import React, { Component } from 'react';
import SearchResultsCard from '../../containers/SearchResultsCard';
import CourseInfoCard from '../../containers/CourseInfoCard';
import WeatherCard from '../../containers/WeatherCard';
import './MainPage.css';
import * as DataCleaner from '../../utilities/DataCleaner';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { Route, Redirect, Switch } from 'react-router-dom';
import { setCourses, setSelectedCourse } from '../../actions/courseActions';
import { toggleSearchResults } from '../../actions/searchResultsActions';
import { toggleCourseDetails } from '../../actions/courseDetailsActions';
import mockCoursesCleaned from '../../mockData/mockCoursesCleaned.js';

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
		const { golfCourses } = this.props
		this.getGolfCourses(this.state.searchTerms)
		this.setState({ searchTerms: '' })
	}

	getGolfCourses = async (searchTerms) => {
		const { setCourses, history, toggleSearchResults } = this.props
		// const fetchedGolfCourses = await DataCleaner.fetchGolfCoursesByZip(searchTerms)
		// setCourses(fetchedGolfCourses)
		setCourses(mockCoursesCleaned)
		toggleSearchResults()
		// this.setState({ showSearchResults: true, showCourseDetails: false })
		// history.push({ pathname: '/searchresults'})
	}

	displayCourseDetails = (id) => {
		const { golfCourses, setSelectedCourse, history, toggleSearchResults, toggleCourseDetails } = this.props
		// const { showSearchResults } = this.state

		toggleCourseDetails()
		toggleSearchResults()
		// if(toggleSearchResults) {
			const selectedCourse = golfCourses.find(course => {
				return course.id === id
			})
			setSelectedCourse(selectedCourse)
			// this.setState({ 
			// 	showCourseDetails: true, 
			// 	showSearchResults: false 
			// })
			// history.push({ pathname: '/searchresults/courseinfo'})
		return selectedCourse
		// }
	}

	// displayWeather = (id) => {
	// 		this.setState({ 
	// 			showWeather: true,
	// 			showCourseDetails: false, 
	// 			showSearchResults: false 
	// 		})
	// }

	// clearDisplay = () => {
	// 	this.setState({ 
	// 		showCourseDetails: false, 
	// 		showSearchResults: false,
	// 		showWeather: false 
	// 	})
	// }

	render() {
		const { pageName, golfCourses, match, searchResultsSelected, courseDetailsSelected } = this.props;
		const { searchTerms, showWeather } = this.state;

		return(
			<div className='MainPage'>
				<p className='page-name'>{pageName}</p>
				{ (!searchResultsSelected && !courseDetailsSelected && !showWeather) 
					?	<div><input
									type='search' 
									placeholder='Search for a zip code or city' 
									className='search-input'
									value={searchTerms}
									onChange={this.handleInputChange}
								/>
								<button onClick={this.handleSubmit}>Submit</button>
							</div>

					: <NavLink 
							to='/findcourses' 
							className='back-to-search-link'>
								<i className='fas fa-caret-left'></i>
							Back to {match.path}</NavLink>
				}
					<Route exact path='/findcourses' render={() => {
						if (searchResultsSelected) {
							return <Redirect to='/findcourses/searchresults' />
						} else if (courseDetailsSelected) {
								return <Redirect to='/findcourses/searchresults/courseinfo'/>
						}	else if (!searchResultsSelected && !courseDetailsSelected && showWeather) {
								return <Redirect to='/findcourses/searchresults/courseinfo/weather'/>
						} else {
								return null
						}
					}}/>

					<Route exact path='/findcourses/searchresults' render={() => {
						return <SearchResultsCard 
											courses={golfCourses}
											displayCourseDetails={this.displayCourseDetails}
										/>
					}} />
					
					<Route exact path='/findcourses/searchresults/courseinfo' render={() => {
						return <CourseInfoCard 
											course={golfCourses[0]} 
											displayWeather={this.displayWeather}
										/>
					}}/>

					<Route exact path='/findcourses/searchresults/courseinfo/weather' render={() => {
						return <WeatherCard />
					}}/>
			</div>
		)
	}
}

export const mapStateToProps = ({ golfCourses, searchResultsSelected, courseDetailsSelected }) => ({ golfCourses, searchResultsSelected, courseDetailsSelected });

export const mapDispatchToProps = (dispatch) => ({
	setCourses: (courses) => dispatch(setCourses(courses)),
	setSelectedCourse: (course) => dispatch(setSelectedCourse(course)),
	toggleSearchResults: () => dispatch(toggleSearchResults()),
	toggleCourseDetails: () => dispatch(toggleCourseDetails())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPage));