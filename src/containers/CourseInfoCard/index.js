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
				<button className='favorite-btn'>
					<i class="fas fa-heart"></i>
				</button>
				<h2 className='course-name'>{name}</h2>
				<div className='course-address'>
					<p>{address}</p>
					<p>{`${city}, ${state} ${zip}`}</p>
				</div>
				<p className='course-info'>
					<span className='course-info-header'>
						Number of holes:
					</span> {holes}
				</p>
				<p className='course-info'>
					<span className='course-info-header'>
						Rating: 
					</span> {rating}
				</p>
				<p className='course-info'>
					<span className='course-info-header'>
						Private: 
					</span> {isPrivate}
					</p>
				<p className='course-info'>
					<span className='course-info-header'>
						Pay to play: 
					</span> {isFree}
				</p>
				<p className='course-info'>
					<span className='course-info-header'>
					Reviews: 
					</span> {reviews}
				</p>
				<button className='course-weather-btn'>
					Course Weather Forecast</button>
			</div>
		)
	}
};

export default CourseInfoCard;