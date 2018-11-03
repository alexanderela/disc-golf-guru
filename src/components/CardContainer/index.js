import React from 'react';
import CourseCard from '../../containers/CourseCard';
import './CardContainer.css';

const CardContainer = ({ courses }) => {
	// const golfCourseCards = courses.map(course => {
	// 	return <CourseCard course={course} courses={courses} key={course.id}/>
	// })
	return(
		<div className='CardContainer'>
			<CourseCard courses={courses}/>
		</div>
	)
}

export default CardContainer