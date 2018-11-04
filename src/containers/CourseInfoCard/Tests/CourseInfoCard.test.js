import React from 'react';
import ReactDOM from 'react-dom';
import CourseInfoCard from '../';
import { shallow } from 'enzyme';
import mockCoursesCleaned from '../../../mockData/mockCoursesCleaned.js';

describe('CourseInfoCard', () => {
	let wrapper;

	beforeEach(() => {
		const mockCourse =  {
											    "id": "4712",
											    "name": "Genesee Valley Park",
											    "isFavorite": false,
											    "holes": "18",
											    "city": "Rochester",
											    "state": "NY",
											    "country": "United States",
											    "zip": "14620",
											    "address": "99 Elmwood Ave.",
											    "reviews": "7",
											    "rating": "3.29",
											    "payToPlay": "0"
											  }
											  
		wrapper = shallow(<CourseInfoCard course={mockCourse}/>)
	})
	it('should render like snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})
	
})