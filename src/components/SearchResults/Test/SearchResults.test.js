import React from 'react';
import ReactDOM from 'react-dom';
import SearchResults from '../';
import { shallow } from 'enzyme';

describe('SearchResults', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<SearchResults />)
	})
	it('should render like snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})
	
})