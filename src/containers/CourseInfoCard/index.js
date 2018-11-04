import React, { Component } from 'react';
import './CourseInfoCard.css';

class CourseInfoCard extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		const { course, displayWeather } = this.props;
		const {
			id, 
			name, 
			address, 
			city, state, 
			zip, 
			holes,
			rating,
			isPrivate,
			isPayToPlay
		} = course;

		return(
			<div className='CourseInfoCard'>
				<div className='header-container'>
					<h2 className='course-name'>{name}</h2>
					<button className='favorite-btn'>
						<i className="fas fa-heart"></i>
					</button>
				</div>
				<div className='course-address'>
					<p>{address}</p>
					<p>{`${city}, ${state} ${zip}`}</p>
				</div>

				<p>
					<span className='course-info-header'>
						Number of holes:
					</span> {holes}
				</p>

				<p>
					<span className='course-info-header'>
						Rating: 
					</span> {rating}
				</p>

				<p>
					<span className='course-info-header'>
						Private: 
					</span> {isPrivate}
					</p>

				<p>
					<span className='course-info-header'>
						Pay to play: 
					</span> {isPayToPlay}
				</p>

				<button 
					className='course-weather-btn'
					onClick={() => displayWeather(id)}>
					Course Weather Forecast</button>
			</div>
		)
	}
};

export default CourseInfoCard;