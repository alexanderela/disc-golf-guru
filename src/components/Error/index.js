import React from 'react';
import './Error.css'
import { NavLink } from 'react-router-dom';

const Error = ({ message }) => (
	<div className='Error'>
		<p className='home-search-instructions'>
			Oops!
		</p>

		<p className='home-intro'>
			{message}
		</p>
	</div>
)

export default Error