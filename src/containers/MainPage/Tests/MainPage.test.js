import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from '../';
import { shallow } from 'enzyme';
import mockCoursesCleaned from '../../mockData/mockCoursesCleaned.js';

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
		it('should call handleInputChange when searchTerms are changed', () => {

		})

		it('should update state', () => {

		})
	})

	describe('handleSubmit', () => {
		it('should call handleSubmit upon submission of form', () => {

		})

		it('should call getGolfCourses when handleSubmit is called', () => {

		})

		it('should update state', () => {

		})
	})

	describe('getGolfCourses', () => {
		it('should call setCourses when getGolfCourses is called', () => {

		})

		it('should update state', () => {

		})
	})
	

	describe('mapStateToProps', () => {
		it('should create the correct props object', () => {
			
		})
	})

	describe('mapDispatchToProps', () => {
		it('should map a key of setCourses', () => {
			
		})

		it('setCourses should call dispatch', () => {
			
		})
	})

})