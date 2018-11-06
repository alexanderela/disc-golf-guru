import React from 'react';
import './CardContainer.css';

const CardContainer = ({favorites}) => {
	// const golfCourseCards = courses.map(course => {
	// 	return <CourseCard course={course} courses={courses} key={course.id}/>
	// })
	return(
		<div className='CardContainer'>
			{favorites}
		</div>
	)
}

export default CardContainer