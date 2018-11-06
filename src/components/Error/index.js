import React from 'react';
import './Error.css';

const Error = ({ message }) => (
  <div className="Error">
    <p className="home-search-instructions">Oops!</p>

    <p className="home-intro">{message}</p>
  </div>
);

export default Error;
