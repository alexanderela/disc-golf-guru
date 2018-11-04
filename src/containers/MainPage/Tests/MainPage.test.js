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

	beforeEach(() => {
		mockFunc = jest.fn();
		wrapper = shallow(
									<MainPage 
										setCourses={mockFunc} 
										golfCourses={mockCoursesCleaned}/>);
	})

	it('should render like snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})
	
	describe('handleInputChange', () => {
		let mockEvent;

		beforeEach(() => {
			mockEvent = { target: { value: 'white plains'} }
		})

		it('should call handleInputChange when searchTerms are changed', () => {
			const spy = spyOn(wrapper.instance(), 'handleInputChange');
			wrapper.instance().forceUpdate();
			wrapper.find('.search-input').simulate('change', mockEvent)
			expect(spy).toHaveBeenCalled()
		})

		it('should update state', () => {
			wrapper.instance().handleInputChange(mockEvent);
			expect(wrapper.state('searchTerms')).toBe('white plains')
		})
	})

	describe('handleSubmit', () => {
		let mockEvent;

		beforeEach(() => {
			mockEvent = { preventDefault: jest.fn() }
		})
		
		it('should call handleSubmit upon submission of form', () => {
			const spy = spyOn(wrapper.instance(), 'handleSubmit');
			wrapper.instance().forceUpdate();
			wrapper.find('form').simulate('submit', mockEvent)
			expect(spy).toHaveBeenCalled();
		})

		it('should call getGolfCourses when handleSubmit is called', () => {
			wrapper.instance().getGolfCourses = jest.fn();
			wrapper.instance().handleSubmit(mockEvent);
			expect(wrapper.instance().getGolfCourses).toHaveBeenCalled();
		})

		it('should update state', () => {
			wrapper.setState({ searchTerms: 'white plains' })
			wrapper.instance().handleSubmit(mockEvent);
			expect(wrapper.state('searchTerms')).toBe('');
		})
	})

	describe('getGolfCourses', () => {
		let mockZip;

		beforeEach(() => {
			mockZip = 14526;
		})

		it('should call setCourses when getGolfCourses is called', async () => {
			await wrapper.instance().getGolfCourses(mockZip);
			expect(mockFunc).toHaveBeenCalled();
		})

		it('should update state', async () => {
			wrapper.setState({ showSearchResults: false });
			await wrapper.instance().getGolfCourses(mockZip);
			expect(wrapper.state('showSearchResults')).toBe(true);
		})
	})

	describe('displayCourseDetails', () => {

	})
	
	describe('clearDisplay', () => {
		it('should set showCourseDetails and showSearchResults to false in state', () => {
			wrapper.setState({  showCourseDetails: true, showSearchResults: true })
			wrapper.instance().clearDisplay()
			expect(wrapper.state('showCourseDetails')).toBe(false)
			expect(wrapper.state('showSearchResults')).toBe(false)
		})
	})


	describe('mapStateToProps', () => {

		it('should create the correct props object', () => {
			const expected = {
				golfCourses: [{ id: 1234, name: 'mockCourse1'}, { id: 4321, name: 'mockCourse2'}]
			}
			const result = mapStateToProps(expected);
			expect(result).toEqual(expected);
		})
	})

	describe('mapDispatchToProps', () => {
		let dispatch;

		beforeEach(() => {
			dispatch = jest.fn();
		})

		it('should map a key of setCourses', () => {
			const dispatchedProps = mapDispatchToProps(dispatch);
			expect(dispatchedProps.setCourses).toBeDefined()
		})

		it('setCourses should call dispatch', () => {
			const dispatchedProps = mapDispatchToProps(dispatch);
			const expected = {
				type: 'SET_COURSES',
				courses: mockCoursesCleaned
			}
			dispatchedProps.setCourses(mockCoursesCleaned);
			expect(dispatch).toHaveBeenCalledWith(expected);
		})
	})

})