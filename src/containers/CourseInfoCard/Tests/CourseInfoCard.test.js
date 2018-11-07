import React from 'react';
import ReactDOM from 'react-dom';
import { CourseInfoCard } from '../';
import { shallow } from 'enzyme';
import mockCoursesCleaned from '../../../mockData/mockCoursesCleaned.js';
import { mapStateToProps, mapDispatchToProps } from '../';

describe('CourseInfoCard', () => {
  let wrapper;
  let toggleFavorite;

  beforeEach(() => {
    toggleFavorite = jest.fn();
    const mockCourse = {
      address: "",
      city: "Brooklyn",
      country: "United States",
      holes: {header: "Number of holes: ", text: "18"},
      id: "1714",
      isFavorite: false,
      isPayToPlay: {header: "Pay to play: ", text: "No"},
      isPrivate: {header: "Private: ", text: "No"},
      name: "Prospect Park - Nethermead",
      rating: {header: "Rating: ", text: "3.25"},
      reviews: {header: "Reviews: ", text: "http://www.dgcoursereview.com/course.php?id=1714"},
      state: "NY",
      zip: "11215"
    };

    wrapper = shallow(
      <CourseInfoCard
        course={mockCourse}
        key={mockCourse.id}
        toggleFavorite={toggleFavorite}
        golfCourses={mockCoursesCleaned}
      />
    );
  });
  it('should render like snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should create the correct props object', () => {
      const expected = {
        golfCourses: [
          { id: 1234, name: 'mockCourse1' },
          { id: 4321, name: 'mockCourse2' },
        ],
      };
      const result = mapStateToProps(expected);
      expect(result).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    let dispatch;

    beforeEach(() => {
      dispatch = jest.fn();
    });

    it('should map a key of toggleFavorite', () => {
      const dispatchedProps = mapDispatchToProps(dispatch);
      expect(dispatchedProps.toggleFavorite).toBeDefined();
    });


    it('should have toggleFavorite call dispatch', () => {
      const dispatchedProps = mapDispatchToProps(dispatch);
      dispatchedProps.toggleFavorite(mockCoursesCleaned.id);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
