import React from 'react';
import './Error.css'
import { NavLink } from 'react-router-dom';

const Error = (props) => (
	<div className='Error'>
		<p className='error-header'>
			Oops!
		</p>

		<p className='error-message'>
			The page you're looking for doesn't exist.
		</p>
	</div>
)

export default Error