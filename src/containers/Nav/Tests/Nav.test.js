import React from 'react';
import ReactDOM from 'react-dom';
import { Nav } from '../';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';

describe('Nav', () => {
  let wrapper;
  let mockEvent;

  beforeEach(() => {
    wrapper = shallow(<Nav location={'/findcourses'} />);
    mockEvent = { target: { name: 'home' } };
  });

  it('should render like snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
