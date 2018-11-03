import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from '../';
import { shallow } from 'enzyme';

describe('MainPage', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<MainPage />)
	})
	it('should render like snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})
	
})