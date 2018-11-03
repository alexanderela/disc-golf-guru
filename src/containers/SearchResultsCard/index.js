import React from 'react';
import './SearchResultsCard.css'

const SearchResultsCard = ({courses, showCourseDetails}) => {
	const courseResults = courses.map(course => {
		const { name, address, city, state, zip, id } = course
		return <div className='course-search-result' key={id}>
							<p>{`${name} ${address}, ${city}, ${state} ${zip}`}</p>
							<button 
								className='search-result-btn'
								onClick={() => showCourseDetails(id)}>Select
							</button>
						</div>
	})
	return(
		<div className='SearchResultsCard'>
			<h2 className='search-result-header'>Search Results</h2>
			<h4 className='nearby-courses'>Nearby Courses</h4>
			{courseResults}
		</div>
	)
}

export default SearchResultsCard