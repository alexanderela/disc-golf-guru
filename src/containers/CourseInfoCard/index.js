import React, { Component } from 'react';
import './CourseInfoCard.css';
import { connect } from 'react-redux';
import { toggleFavorite } from '../../actions/courseActions';
import PropTypes from 'prop-types';

export class CourseInfoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleFavorite = async course => {
    await this.props.toggleFavorite(course.id);
    this.filterFavorites()
  };

  filterFavorites = () => {
    const { golfCourses } = this.props;
    let retrievedStorage = []

    if(localStorage) {
      const gottenStorage = this.getLocalStorage('favorites')
      const filteredFavorites = golfCourses.filter(course => course.isFavorite);
      retrievedStorage = [...gottenStorage, ...filteredFavorites]
    } else {
      retrievedStorage = golfCourses.filter(course => course.isFavorite);
    }
    this.setLocalStorage('favorites', retrievedStorage);
  };

  setLocalStorage = (key, category) => {
    localStorage.setItem(key, JSON.stringify(category));
  };

  getLocalStorage = categoryName => {
    if (localStorage) {
      console.log(JSON.parse(localStorage.getItem(categoryName)))
      return JSON.parse(localStorage.getItem(categoryName));
    } else {
      return
    }
  };

  render() {
    const { course } = this.props;
    const {
      name,
      address,
      city,
      state,
      zip,
      holes,
      rating,
      isPrivate,
      isPayToPlay,
    } = course;

    return (
      <div className="CourseInfoCard">
        <div className="header-container">
          <h2 className="course-name">{name}</h2>
          <button
            className="favorite-btn"
            onClick={() => this.handleFavorite(course)}
          >
            <i className="fas fa-heart" />
          </button>
        </div>
        <div className="course-address">
          <p className="address-fields">{address}</p>
          <p className="address-fields">{`${city}, ${state} ${zip}`}</p>
        </div>

        <p className="course-info">
          <span className="course-info-header">Number of holes:</span> {holes}
        </p>

        <p className="course-info">
          <span className="course-info-header">Rating:</span> {rating}/5
        </p>

        <p className="course-info">
          <span className="course-info-header">Private:</span> {isPrivate}
        </p>

        <p className="course-info">
          <span className="course-info-header">Pay to play:</span> {isPayToPlay}
        </p>

        <p className="course-info">
          <span className="course-info-header">Reviews:</span> {isPayToPlay}
        </p>
      </div>
    );
  }
}

export const mapStateToProps = ({ golfCourses }) => ({ golfCourses });

export const mapDispatchToProps = dispatch => ({
  toggleFavorite: courseId => dispatch(toggleFavorite(courseId)),
});

CourseInfoCard.propTypes = {
  course: PropTypes.object.isRequired,
  golfCourses: PropTypes.array.isRequired,
  toggleFavorite: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseInfoCard);
