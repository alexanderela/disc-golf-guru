import React from 'react';
import ReactDOM from 'react-dom';
import WeatherCard from '../';
import { shallow } from 'enzyme';
import mockWeather from '../../../mockData/mockWeather.js';

describe('WeatherCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<WeatherCard weather={mockWeather} />);
  });

  it('should render like snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
