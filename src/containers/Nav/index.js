import React, { Component } from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			home: false,
			findCourse: false,
			favorites: false
		}
	}

	handleActiveClass = (e) => {
		const { name } = e.target;
		const stateKeys = Object.keys(this.state)

		stateKeys.forEach(key => {
			if (name === key) {
				this.setState({ [key]: true })
			} else {
				this.setState({ [key]: false })
			}
		})
	}

	render() {
		const { home, findCourse, favorites } = this.state;
		const { location } = this.props

		return(
			<div className='Nav'>		
				<NavLink
					to='/'>
					<button 
						className={`nav-btn home-btn ${home || location.pathname === '/' ? 'nav-btn-active' : 'nav-btn-inactive'}`} 
						name='home'
						onClick={this.handleActiveClass}>Home
					</button>				
				</NavLink>
				<NavLink 
					to='/findcourses'>
					<button 
						className={`nav-btn find-course-btn ${findCourse ? 'nav-btn-active' : 'nav-btn-inactive'}`}  
						name='findCourse'
						onClick={this.handleActiveClass}>Find A Course
					</button>
				</NavLink>
				<NavLink 
					to='/favorites'>
					<button 
						className={`nav-btn favorites-btn ${favorites ? 'nav-btn-active' : 'nav-btn-inactive'}`}  
						name='favorites'
						onClick={this.handleActiveClass}>Favorite Courses
					</button>
				</NavLink>
			</div>
		)
	}
}

export default withRouter(Nav)