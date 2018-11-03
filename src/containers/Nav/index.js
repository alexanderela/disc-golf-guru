import React, { Component } from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return(
			<div className='Nav'>		
				<NavLink 
					to='/'>
					<button className='nav-button'>Home
					</button>				
				</NavLink>
				<NavLink 
					to='/findcourses'>
					<button className='nav-button'>Find A Course
					</button>
				</NavLink>
				<NavLink 
					to='/favorites'>
					<button className='nav-button'>Favorite Courses
					</button>
				</NavLink>
			</div>
		)
	}
}

export default Nav