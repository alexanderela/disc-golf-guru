import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="Header">
    <NavLink to="/" className="NavLink-site-title">
      <h1 className="site-title">Disc Golf Guru</h1>
    </NavLink>
  </div>
);

export default Header;
