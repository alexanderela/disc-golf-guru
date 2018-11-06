import React from 'react';
import './CardContainer.css';
import CourseInfoCard from '../../containers/CourseInfoCard';
import Error from '../Error';
import PropTypes from 'prop-types';

const CardContainer = ({ favorites }) => {
  const favoriteCards = favorites.map(course => {
    return <CourseInfoCard course={course} key={course.name} />;
  });
  return (
    <div className="CardContainer">
      {favorites.length ? (
        favoriteCards
      ) : (
        <Error message={'You currently have no favorites selected'} />
      )}
    </div>
  );
};

CardContainer.propTypes = {
	favorites: PropTypes.array.isRequired
}

export default CardContainer;
