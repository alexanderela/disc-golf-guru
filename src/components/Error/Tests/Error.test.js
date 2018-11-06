import React from 'react';
import ReactDOM from 'react-dom';
import Error from '../';
import { shallow } from 'enzyme';

describe('Error', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Error />);
	})

	it('should render like snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	})
})