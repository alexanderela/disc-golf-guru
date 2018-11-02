import React from 'react';
import './Home.css'

const Home = () => (
	<div className='Home'>
		<p className='home-intro'>
			Disc Golf Guru lets you search for nearby
			disc golf courses and shows your current 
			weather and forecasts for each course.
		</p>
		<input 
			type='search' 
			placeholder='Search for a zip code or city' 
			className='home-search'
		/>
	</div>
)

export default Home