import React from 'react';
import ReactDOM from 'react-dom';
import CourseInfoCard from '../';
import { shallow } from 'enzyme';

describe('CourseInfoCard', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<CourseInfoCard />)
	})
	it('should render like snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})
	
})