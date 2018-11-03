import React from 'react';
import './CourseCard.css'

const CourseCard = ({courses, showCourseDetails}) => {
	const courseResults = courses.map(course => {
		const { name, address, city, state, zip, id } = course
		return <div className='search-result' key={id}>
							<p>{`${name} ${address}, ${city}, ${state} ${zip}`}</p>
							<button 
								className='search-result-btn'
								onClick={() => showCourseDetails(id)}>Select
							</button>
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