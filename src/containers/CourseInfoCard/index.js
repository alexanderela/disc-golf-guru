import React, { Component } from 'react';
import './CourseInfoCard.css';

class CourseInfoCard extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		const { course } = this.props;
		const { 
			name, 
			address, 
			city, state, 
			zip, 
			holes, 
			reviews,
			rating,
			isPrivate,
			isFree
		} = course;

		return(
			<div className='CourseInfoCard'>
				<button></button>
				<h2 className='course-name'>{name}</h2>
				<div className='course-address'>
					<p>{address}</p>
					<p>{`${city}, ${state} ${zip}`}</p>
				</div>
				<p className='course-info'>{`Number of holes: ${holes}`}</p>
				<p className='course-info'>{`Rating: ${rating}`}</p>
				<p className='course-info'>{`Private: ${isPrivate}`}</p>
				<p className='course-info'>{`Pay to play: ${isFree}`}</p>
				<p className='course-info'>{`Reviews: ${reviews}`}</p>
				<button className='course-weather-btn'>Course Weather</button>
			</div>
		)
	}
};

export default CourseInfoCard;