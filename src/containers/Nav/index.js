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
				<button className='nav-button'>
					<NavLink to='/'>Nav1
					</NavLink>
				</button>				
				<button className='nav-button'>
					<NavLink to='/'>Nav2
					</NavLink>
				</button>				
				<button className='nav-button'>
					<NavLink to='/'>Nav3
					</NavLink>
				</button>


			</div>
		)
	}
}

export default Nav