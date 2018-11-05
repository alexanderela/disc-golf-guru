import React from 'react';
import './Error.css'
import { NavLink } from 'react-router-dom';

const Error = (props) => (
	<div className='Error'>
		<p className='home-search-instructions'>
			Oops!
		</p>

		<p className='home-intro'>
			The page you're looking for doesn't exist.
		</p>
	</div>
)

export default Error