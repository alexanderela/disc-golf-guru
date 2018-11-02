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
				<div className='button-container'>
					<button className='nav-button'>
						<NavLink 
							to='/' 
							className='NavLink-button'>Home
						</NavLink>
					</button>				
					<button className='nav-button'>
						<NavLink 
							to='/findcourses' 
							className='NavLink-button'>Find A Course
						</NavLink>
					</button>
					<button className='nav-button'>
						<NavLink 
							to='/favorites' 
							className='NavLink-button'>Favorite Courses
						</NavLink>
					</button>
				</div>
			</div>
		)
	}
}

export default Nav