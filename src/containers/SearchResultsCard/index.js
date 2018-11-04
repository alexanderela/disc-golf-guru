import React from 'react';
import './SearchResultsCard.css'

const SearchResultsCard = ({courses, displayCourseDetails}) => {
	const courseResults = courses.map(course => {
		const { name, address, city, state, zip, id } = course
		return <div className='course-search-result' key={name}>
							<p>{`${name} ${address}, ${city}, ${state} ${zip}`}</p>
							<button 
								className='search-result-btn'
								onClick={() => displayCourseDetails(id)}>Select
							</button>
						</div>
	})
	return(
		<div className='SearchResultsCard'>
			<h2 className='search-result-header'>Search Results</h2>
			<h4 className='nearby-courses'>Nearby Courses</h4>
			{courses.length ? courseResults : 'Oops! There are no courses near where you searched.'}
		</div>
	)
}

export default SearchResultsCard