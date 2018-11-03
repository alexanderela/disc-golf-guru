import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../';
import { shallow } from 'enzyme';

describe('Card', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Card />)
	})
	it('should render like snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})
	
})