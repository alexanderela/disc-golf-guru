import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../';
import { shallow } from 'enzyme';

describe('Home', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Home />)
	})
	it('should render like snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})
	
})