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
    let retrievedStorage;

    if(localStorage.length) {
      retrievedStorage = this.getCoursesFromLocalStorage()
    } else {
      retrievedStorage = golfCourses.filter(course => course.isFavorite);
    }
    this.setLocalStorage('favorites', retrievedStorage);
  };

  getCoursesFromLocalStorage = () => {
      const { golfCourses, toggleFavorite } = this.props
      let retrievedStorage = []
      const filteredFromState = golfCourses.filter(course => course.isFavorite);

      filteredFromState.forEach((fav) => {
        if(!localStorage.favorites.includes(fav)) {
          retrievedStorage.push(fav)
        } else {
          toggleFavorite(fav.id)
        }
      })

      return retrievedStorage
  }


  isInFavorites = (entry) => {
    return localStorage.favorites.find((fav) => fav.id === entry.id)
  };

  setLocalStorage = (key, category) => {
    localStorage.setItem(key, JSON.stringify(category));
  };

  getLocalStorage = categoryName => {
    if (localStorage) {
      return JSON.parse(localStorage.getItem(categoryName));
    } else {
      return []
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
      reviews
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
          <span className="course-info-header">{holes.header}</span> {holes.text}
        </p>

        <p className="course-info">
          <span className="course-info-header">{rating.header}</span> {rating.text}/5
        </p>

        <p className="course-info">
          <span className="course-info-header">{isPrivate.header}</span> {isPrivate.text}
        </p>

        <p className="course-info">
          <span className="course-info-header">{isPayToPlay.header}</span> {isPayToPlay.text}
        </p>

        <p className="course-info">
          <span className="course-info-header">{reviews.header}</span> 
          <a href={reviews.text} 
          target='_blank' rel='noopener noreferrer'>Disc Golf Course Review</a>
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
