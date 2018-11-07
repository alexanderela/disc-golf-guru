import React from 'react';
import './Error.css';
import PropTypes from 'prop-types';

const Error = ({ message }) => (
  <div className="Error">
    <p className="home-search-instructions">Oops!</p>

    <p className="home-intro">{message}</p>
  </div>
);

Error.propTypes = {
	message: PropTypes.string
}

export default Error;
