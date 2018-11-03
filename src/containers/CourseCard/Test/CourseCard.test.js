import React from 'react';
import ReactDOM from 'react-dom';
import CourseCard from '../';
import { shallow } from 'enzyme';

describe('CourseCard', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<CourseCard />)
	})
	it('should render like snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})
	
})