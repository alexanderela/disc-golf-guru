import React from 'react';
import ReactDOM from 'react-dom';
import SearchResultsCard from '../';
import { shallow } from 'enzyme';
import mockCoursesCleaned from '../../../mockData/mockCoursesCleaned.js';
import { mapDispatchToProps } from '../';

describe('SearchResultsCard', () => {
  let wrapper;
  let mockCourses;

  beforeEach(() => {
    wrapper = shallow(<SearchResultsCard courses={mockCoursesCleaned} />);
  });

  it('should render like snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

	describe('mapDispatchToProps', () => {
    let dispatch;

    beforeEach(() => {
      dispatch = jest.fn();
    });

    it('should map a key of showSearchResultsCard', () => {
      const dispatchedProps = mapDispatchToProps(dispatch);
      expect(dispatchedProps.showSearchResultsCard).toBeDefined();
    });

    it('should map a key of showCourseDetailsCard', () => {
      const dispatchedProps = mapDispatchToProps(dispatch);
      expect(dispatchedProps.showCourseDetailsCard).toBeDefined();
    });

    it('should have showSearchResultsCard call dispatch', () => {
      const dispatchedProps = mapDispatchToProps(dispatch);
      dispatchedProps.showSearchResultsCard(mockCoursesCleaned);
      expect(dispatch).toHaveBeenCalled();
    });

    it('should have showCourseDetailsCard call dispatch', () => {
      const dispatchProps = mapDispatchToProps(dispatch);
      dispatchProps.showCourseDetailsCard();
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
