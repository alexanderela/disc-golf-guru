import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from '../';
import { mapStateToProps, mapDispatchToProps } from '../';
import { shallow } from 'enzyme';
import mockCoursesCleaned from '../../../mockData/mockCoursesCleaned.js';

describe('MainPage', () => {
	let mockFunc;
	let wrapper;

	beforeEach(() => {
		mockFunc = jest.fn();
		wrapper = shallow(<MainPage setCourses={mockFunc} golfCourses={mockCoursesCleaned}/>);
	})

	it('should render like snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})
	
	describe('handleInputChange', () => {
		xit('should call handleInputChange when searchTerms are changed', () => {

		})

		xit('should update state', () => {

		})
	})

	describe('handleSubmit', () => {
		xit('should call handleSubmit upon submission of form', () => {

		})

		xit('should call getGolfCourses when handleSubmit is called', () => {

		})

		xit('should update state', () => {

		})
	})

	describe('getGolfCourses', () => {
		xit('should call setCourses when getGolfCourses is called', () => {

		})

		xit('should update state', () => {

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