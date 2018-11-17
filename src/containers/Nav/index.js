import React, { Component } from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

export class Nav extends Component {
  render() {
    const { location } = this.props;

    return (
      <div className="Nav">
        <NavLink to="/">
          <button
            className={`nav-btn ${
              location.pathname === "/"
                ? 'nav-btn-active'
                : 'nav-btn-inactive'
            }`}
            name="home"
            onClick={this.handleActiveClass}
          >
            Home
          </button>
        </NavLink>
        <NavLink to="/findcourses">
          <button
            className={`nav-btn ${
              location.pathname === '/findcourses' 
                ? 'nav-btn-active' 
                : 'nav-btn-inactive'
            }`}
            name="findCourse"
            onClick={this.handleActiveClass}
          >
            Find A Course
          </button>
        </NavLink>
        <NavLink to="/favorites">
          <button
            className={`nav-btn ${
              location.pathname === '/favorites' 
                ? 'nav-btn-active' 
                : 'nav-btn-inactive'
            }`}
            name="favorites"
            onClick={this.handleActiveClass}
          >
            Favorite Courses
          </button>
        </NavLink>
      </div>
    );
  }
}

Nav.propTypes = {
  location: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
}

export default withRouter(Nav);
