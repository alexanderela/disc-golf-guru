import React from 'react';
import ReactDOM from 'react-dom';
import SearchResultsCard from '../';
import { shallow } from 'enzyme';
import mockCourses from '../../../mockData/mockCourses.js';

describe('SearchResultsCard', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<SearchResultsCard courses={mockCourses} />);
	})

	it('should render like snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	})

	it('should render an entry for each golf course', () => {
		expect(wrapper.find('p').length).toEqual(5);
	})
	
})