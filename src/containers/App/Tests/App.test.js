import React from 'react';
import ReactDOM from 'react-dom';
import App from '../';
import { shallow } from 'enzyme';
import { mapStateToProps, mapDispatchToProps } from '../';

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

describe('mapStateToProps', () => {
    it('should create the correct props object', () => {
      const expected = {
        golfCourses: [
          { id: 1234, name: 'mockCourse1' },
          { id: 4321, name: 'mockCourse2' },
        ],
      };
      const result = mapStateToProps(expected);
      expect(result).toEqual(expected);
    });
  });
});
