import React from 'react';
import ReactDOM from 'react-dom';
import App from '../';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  afterEach(() => {
		localStorage.clear()  	
  })

  it('should render like snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('getLocalStorage', () => {
		it('gets and parses data from local storage', () => {
			const mockData = [{ "class": "wheeled", "model": "Digger Crawler" }, 
			{"class": "tires", "model": "Mustang"}]
			localStorage.setItem('mockData', JSON.stringify(mockData))
			const	getStorage = wrapper.instance().getLocalStorage('mockData')
			expect(getStorage).toEqual(mockData) 
		})
  })

  describe('checkLocalStorage', () => {
		// it('retrieves planets from local storage if there are planets in local storage', async () => {
		// 		localStorage.setItem('planets', JSON.stringify(mockVehicle))
		// 		const spy = spyOn(wrapper.instance(), 'getLocalStorage')	
		// 		wrapper.instance().showPlanets()	
		// 		expect(spy).toHaveBeenCalled()				
		// 	})
  	
	})
});
