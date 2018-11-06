import React, { Component } from 'react';
import './CourseInfoCard.css';
import { connect } from 'react-redux';
import { toggleFavorite } from '../../actions/courseActions';

class CourseInfoCard extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	handleFavorite = async (course) => {
		this.props.toggleFavorite(course.id);
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
					<button 
						className='favorite-btn'
						onClick={() => this.handleFavorite(course)}>
						<i className="fas fa-heart"></i>
					</button>
				</div>
				<div className='course-address'>
					<p className='address-fields'>{address}</p>
					<p className='address-fields'>{`${city}, ${state} ${zip}`}</p>
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
					</span> {isPayToPlay}
				</p>
			</div>
		)
	}
};

export const mapStateToProps = ({ golfCourses }) => ({ golfCourses });

export const mapDispatchToProps = (dispatch) => ({
	toggleFavorite: (courseId) => dispatch(toggleFavorite(courseId))
});


export default connect(mapStateToProps, mapDispatchToProps)(CourseInfoCard);