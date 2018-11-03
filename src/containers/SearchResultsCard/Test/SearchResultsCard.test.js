import React from 'react';
import ReactDOM from 'react-dom';
import SearchResultsCard from '../';
import { shallow } from 'enzyme';

describe('SearchResultsCard', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<SearchResultsCard />)
	})
	it('should render like snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})
	
})