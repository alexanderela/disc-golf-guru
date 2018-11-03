import React, { Component } from 'react';
import './CourseInfoCard.css';

class CourseInfoCard extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		console.log(this.props.course)
		return(
			<div className='CourseInfoCard'>
				
			</div>
		)
	}
};

export default CourseInfoCard;