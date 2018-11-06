import React from 'react';
import ReactDOM from 'react-dom';
import SearchResultsCard from '../';
import { shallow } from 'enzyme';
import mockCoursesCleaned from '../../../mockData/mockCoursesCleaned.js';

describe('SearchResultsCard', () => {
  let wrapper;
  let mockCourses;

  beforeEach(() => {
    wrapper = shallow(<SearchResultsCard courses={mockCoursesCleaned} />);
  });

  it('should render like snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
