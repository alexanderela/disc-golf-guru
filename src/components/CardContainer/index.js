import React from 'react';
import './CardContainer.css';
import CourseInfoCard from '../../containers/CourseInfoCard';
import Error from '../Error';

const CardContainer = ({ favorites }) => {
	const favoriteCards = favorites.map(course => {
		return <CourseInfoCard course={course} key={course.id}/>
	})
	return(
		<div className='CardContainer'>
			{favorites.length ? favoriteCards : <Error message={'You currently have no favorites selected'}/>}
		</div>
	)
}


export default CardContainer