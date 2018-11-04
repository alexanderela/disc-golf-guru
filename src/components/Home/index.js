import React from 'react';
import './Home.css'
import { NavLink } from 'react-router-dom';

const Home = () => (
	<div className='Home'>
		<h2 className='home-header'>Welcome to Disc Golf Guru!</h2>
		<p className='home-intro'>
			This site lets you search for nearby
			disc golf courses and shows your current 
			weather and forecasts for each course.
		</p>
		<NavLink to='/findcourses'>
			<button className='home-search-button'>
			Click here to search for a disc golf course
			</button>
		</NavLink>
	</div>
)

export default Home