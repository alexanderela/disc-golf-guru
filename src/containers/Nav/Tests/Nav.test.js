import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../';
import { shallow } from 'enzyme';

describe('Nav', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Nav />)
	})
	it('should render like snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})
	
	it('', () => {

	})

	it('', () => {
		
	})

	it('', () => {
		
	})
})