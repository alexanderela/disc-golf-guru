import React from 'react';
import ReactDOM from 'react-dom';
import { CourseInfoCard } from '../';
import { shallow } from 'enzyme';
import mockCoursesCleaned from '../../../mockData/mockCoursesCleaned.js';

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
});
