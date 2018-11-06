import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from '../';
import { shallow } from 'enzyme';
import mockCourses from '../../../mockData/mockCourses.js';
import CourseInfoCard from '../../../containers/CourseInfoCard';

describe('CardContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CardContainer favorites={mockCourses} />);
  });
  it('should render like snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render each card', () => {
    expect(wrapper.find(CourseInfoCard).length).toEqual(5);
  });
});
