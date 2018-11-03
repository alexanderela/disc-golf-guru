import React from 'react';
import './CourseCard.css'

const CourseCard = ({courses}) => {
	const courseResults = courses.map(course => {
		const { name, address, city, state, zip } = course
		return <div>
							<p>{`${name} - ${address}, ${city}, ${state} ${zip}`}</p>
							<button>Select</button>
						</div>
	})
	return(
		<div className='CourseCard'>
			<h2>Search Results</h2>
			<h4>Nearby Courses</h4>
			{courseResults}
		</div>
	)
}

export default CourseCard