import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../';
import { shallow } from 'enzyme';

describe('Header', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Header />)
	})
	it('should render like snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})
	
})