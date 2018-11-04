import React from 'react';
import SearchResultsCard from '../../containers/SearchResultsCard';
import './CardContainer.css';

const CardContainer = ({ courses }) => {
	// const golfCourseCards = courses.map(course => {
	// 	return <CourseCard course={course} courses={courses} key={course.id}/>
	// })
	return(
		<div className='CardContainer'>
			<SearchResultsCard courses={courses}/>
		</div>
	)
}

export default CardContainer