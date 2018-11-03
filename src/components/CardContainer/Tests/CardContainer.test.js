import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from '../';
import { shallow } from 'enzyme';

describe('CardContainer', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<CardContainer />)
	})
	it('should render like snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})
	
})