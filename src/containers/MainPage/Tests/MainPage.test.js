import React from 'react';
import ReactDOM from 'react-dom';
import { Switch } from 'react-router-dom';
import { MainPage } from '../';
import { mapStateToProps, mapDispatchToProps } from '../';
import { shallow, mount } from 'enzyme';
import mockCoursesCleaned from '../../../mockData/mockCoursesCleaned.js';
jest.mock('../../../utilities/API');

describe('MainPage', () => {
  let mockFunc;
  let wrapper;
  let mockFetchGolfCourses;
  let mockFetchWeather;
  let mockShowSearch;
  let mockShowCourseDetails;

  beforeEach(() => {
    mockFunc = jest.fn();
    mockFetchGolfCourses = jest.fn();
    mockFetchWeather = jest.fn();
    mockShowSearch = jest.fn();
    mockShowCourseDetails = jest.fn();
    wrapper = shallow(
      <MainPage
        fetchGolfCourses={mockFetchGolfCourses}
        fetchWeather={mockFetchWeather}
        golfCourses={mockCoursesCleaned}
        showSearchResultsCard={mockShowSearch}
        showCourseDetailsCard={mockShowCourseDetails}
        cardSelected={''}
      />
    );
  });

  it('should render like snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleInputChange', () => {
    let mockEvent;

    beforeEach(() => {
      mockEvent = { target: { value: 'white plains' } };
    });

    it('should call handleInputChange when searchTerms are changed', () => {
      const spy = spyOn(wrapper.instance(), 'handleInputChange');
      wrapper.instance().forceUpdate();
      wrapper.find('.search-input').simulate('change', mockEvent);
      expect(spy).toHaveBeenCalled();
    });

    it('should update state', () => {
      wrapper.instance().handleInputChange(mockEvent);
      expect(wrapper.state('searchTerms')).toBe('white plains');
    });
  });

  describe('handleSubmit', () => {
    let mockEvent;

    beforeEach(() => {
      mockEvent = { preventDefault: jest.fn() };
    });

    it('should call handleSubmit upon submission of form', () => {
      const spy = spyOn(wrapper.instance(), 'handleSubmit');
      wrapper.instance().forceUpdate();
      wrapper.find('form').simulate('submit', mockEvent);
      expect(spy).toHaveBeenCalled();
    });

    it('should call getGolfCourses when handleSubmit is called', () => {
      wrapper.instance().getGolfCourses = jest.fn();
      wrapper.instance().handleSubmit(mockEvent);
      expect(wrapper.instance().getGolfCourses).toHaveBeenCalled();
    });

    it('should update state', () => {
      wrapper.setState({ searchTerms: 'white plains' });
      wrapper.instance().handleSubmit(mockEvent);
      expect(wrapper.state('searchTerms')).toBe('');
    });
  });

  describe('getGolfCourses', () => {
    let mockZip;

    beforeEach(() => {
      mockZip = 14526;
    });

    it('should call fetchGolfCourses when getGolfCourses is called', async () => {
      await wrapper.instance().getGolfCourses(mockZip);
      expect(mockFetchGolfCourses).toHaveBeenCalled();
    });

    it('should call showSearchResultsCard when getGolfCourses is called', async () => {
      await wrapper.instance().getGolfCourses(mockZip);
      expect(mockShowSearch).toHaveBeenCalled();
    });
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

    it('should map a key of fetchGolfCourses', () => {
      const dispatchedProps = mapDispatchToProps(dispatch);
      expect(dispatchedProps.fetchGolfCourses).toBeDefined();
    });

    it('should map a key of showSearchResultsCard', () => {
      const dispatchedProps = mapDispatchToProps(dispatch);
      expect(dispatchedProps.showSearchResultsCard).toBeDefined();
    });

    it('should map a key of showCourseDetailsCard', () => {
      const dispatchedProps = mapDispatchToProps(dispatch);
      expect(dispatchedProps.showCourseDetailsCard).toBeDefined();
    });

    it('should have fetchGolfCourses call dispatch', () => {
      const dispatchedProps = mapDispatchToProps(dispatch);
      dispatchedProps.fetchGolfCourses(mockCoursesCleaned);
      expect(dispatch).toHaveBeenCalled();
    });

    it('showSearchResultsCard should call dispatch', () => {
      const dispatchProps = mapDispatchToProps(dispatch);
      dispatchProps.showSearchResultsCard();
      expect(dispatch).toHaveBeenCalled();
    });

    it('showCourseDetailsCard should call dispatch', () => {
      const dispatchProps = mapDispatchToProps(dispatch);
      dispatchProps.showCourseDetailsCard();
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
