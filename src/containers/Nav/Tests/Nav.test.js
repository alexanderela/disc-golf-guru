import React from 'react';
import ReactDOM from 'react-dom';
import { Nav } from '../';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

describe('Nav', () => {
	let wrapper;
	let mockEvent;

	beforeEach(() => {
		wrapper = shallow(<Nav location={'/findcourses'}/>)
		mockEvent = { target: {name: 'home'} }
	})

	it('should render like snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})
	
	it('it should select state as true for nav button clicked', () => {
		wrapper.instance().handleActiveClass(mockEvent)
		expect(wrapper.state('home')).toBe(true);
	})

	it('it should select state as false for an active button if another button is clicked', () => {
		wrapper.setState({ findCourse: true })
		wrapper.instance().handleActiveClass(mockEvent)
		expect(wrapper.state('findCourse')).toBe(false);		
	})
})