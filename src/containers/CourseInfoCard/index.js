import React, { Component } from 'react';
import './CourseInfoCard.css';
import { connect } from 'react-redux';
import { toggleFavorite } from '../../actions/courseActions';
import PropTypes from 'prop-types';

export class CourseInfoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false
    };
  }

  handleFavorite = async course => {
    const { toggleFavorite, updateFavorites } = this.props
    
    await toggleFavorite(course.id);
    this.filterFavorites(course)
    updateFavorites(course.name)
    this.checkIfFavorite(course)
  };

  checkIfFavorite = (course) => {
    if(course.isFavorite === false) {
      this.setState({ favorite: true })
    } else {
      this.setState({ favorite: false })      
    }
  }

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
    const { favorite } = this.state;
    const { course, favoriteSelected } = this.props;
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
            className={`favorite-btn ${favorite || favoriteSelected === name 
              ? "fav-btn-active" 
              : "fav-btn-inactive" }`}
            onClick={() => this.handleFavorite(course)}
          >
            <i className={`fas fa-heart ${favorite || favoriteSelected === name 
              ? "heart-active" 
              : "heart-inactive"}`} />
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

        <p className="course-info-link">
          <span className="course-info-header">{reviews.header}</span> 
          <a className='review-link' href={reviews.text} 
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
