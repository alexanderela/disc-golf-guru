import React, { Component } from 'react';
import SearchResultsCard from '../../containers/SearchResultsCard';
import CourseInfoCard from '../../containers/CourseInfoCard';
import WeatherCard from '../../containers/WeatherCard';
import './MainPage.css';
import * as DataCleaner from '../../utilities/DataCleaner';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { setCourses, setSelectedCourse, clearCourses } from '../../actions/courseActions';

export class MainPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerms: '',
			showSearchResults: false,
			showCourseDetails: false,
			showWeather: false
		}
	}

	handleInputChange = (e) => {
		this.setState({ searchTerms: e.target.value })
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const { golfCourses, clearCourses } = this.props
		this.getGolfCourses(this.state.searchTerms)
		this.setState({ searchTerms: '' })
	}

	getGolfCourses = async (searchTerms) => {
		const fetchedGolfCourses = await DataCleaner.fetchGolfCoursesByZip(searchTerms)
		this.props.setCourses(fetchedGolfCourses)
		this.setState({ showSearchResults: true, showCourseDetails: false })
	}

	displayCourseDetails = (id) => {
		const { golfCourses, setSelectedCourse } = this.props
		clearCourses();
		this.clearDisplay();
		const { showSearchResults } = this.state
		if(showSearchResults) {
			const selectedCourse = golfCourses.find(course => {
				return course.id === id
			})
			setSelectedCourse(selectedCourse)
			this.setState({ 
				showCourseDetails: true, 
				showSearchResults: false 
			})
		return selectedCourse
		}
	}

	displayWeather = (id) => {
		console.log(id)
			this.setState({ 
				showWeather: true,
				showCourseDetails: false, 
				showSearchResults: false 
			})
	}

	clearDisplay = () => {
		this.setState({ 
			showCourseDetails: false, 
			showSearchResults: false,
			showWeather: false 
		})
	}

	render() {
		const { pageName, golfCourses } = this.props;
		const { searchTerms, showSearchResults, showCourseDetails, showWeather } = this.state;

		return(
			<form className='MainPage' onSubmit={this.handleSubmit}>
				<p className='page-name'>{pageName}</p>
				{ (!showSearchResults && !showCourseDetails && !showWeather) 
					?	<input
									type='search' 
									placeholder='Search for a zip code or city' 
									className='search-input'
									value={searchTerms}
									onChange={this.handleInputChange}
								/>
					: <NavLink to='/findcourses'>Back to Search</NavLink>
							}
	
				{showSearchResults &&
					<SearchResultsCard 
						courses={golfCourses}
						displayCourseDetails={this.displayCourseDetails}/>
				}

				{showCourseDetails && 
					<CourseInfoCard course={golfCourses[0]} displayWeather={this.displayWeather}/>
				}

				{showWeather &&
					<WeatherCard />}
			</form>
		)
	}
}

export const mapStateToProps = ({ golfCourses }) => ({ golfCourses });

export const mapDispatchToProps = (dispatch) => ({
	setCourses: (courses) => dispatch(setCourses(courses)),
	setSelectedCourse: (course) => dispatch(setSelectedCourse(course)),
	clearCourses: () => dispatch(clearCourses())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPage));

// import React from 'react';
// import './Home.css'

// const Home = () => (
// 	<div className='Home'>
// 		<p className='home-intro'>
// 			Disc Golf Guru lets you search for nearby
// 			disc golf courses and shows your current 
// 			weather and forecasts for each course.
// 		</p>
// 		<input 
// 			type='search' 
// 			placeholder='Search for a zip code or city' 
// 			className='home-search'
// 		/>
// 	</div>
// )

// export default Home