import React from 'react';
import ReactDOM from 'react-dom';
import App from '../';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render like snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
