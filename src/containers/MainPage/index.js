import React, { Component } from 'react';
// import CardContainer from '../../components/CardContainer';
import SearchResultsCard from '../../containers/SearchResultsCard';
import './MainPage.css';
import * as DataCleaner from '../../utilities/DataCleaner';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { setCourses } from '../../actions/courseActions';

class MainPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerms: '',
			showSearchResults: false,
			showCourseDetails: false
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
		const fetchedGolfCourses = await DataCleaner.fetchGolfCoursesByZip(searchTerms)
		this.props.setCourses(fetchedGolfCourses)
		this.setState({ showSearchResults: true })
	}

	showCourseDetails = (id) => {
		console.log(id)
	}

	render() {
		const { pageName, golfCourses } = this.props;
		const { searchTerms, showSearchResults, showCourseDetails } = this.state;

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
				{showSearchResults &&
					<SearchResultsCard 
						courses={golfCourses}
						showCourseDetails={this.showCourseDetails}/>
				}
				{showCourseDetails && 
					<SearchResultsCard 
						courses={golfCourses}
						showCourseDetails={this.showCourseDetails}/>
				}
			</form>
		)
	}
}

export const mapStateToProps = ({ golfCourses }) => ({ golfCourses });

export const mapDispatchToProps = (dispatch) => ({
	setCourses: (courses) => dispatch(setCourses(courses))
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