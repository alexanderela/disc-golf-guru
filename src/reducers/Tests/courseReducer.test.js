import { courseReducer } from '../courseReducer';
import mockCourses from '../../mockData/mockCourses.js';

describe('courseReducer', () => {
  it('should return default state when no type is provided', () => {
    const expected = [];
    const result = courseReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should set golf courses as new state', () => {
    const mockAction = {
      type: 'SET_COURSES',
      courses: mockCourses,
    };
    const expected = courseReducer([], mockAction);
    expect(expected).toEqual(mockCourses);
  });

  it('should toggle a favorite on a course in state', () => {
    const mockCourses = [
      { id: 1234, isFavorite: false },
      { id: 4321, isFavorite: false },
    ];
    const mockAction = {
      type: 'TOGGLE_FAVORITE',
      courseId: 1234,
    };
    const expected = [
      { id: 1234, isFavorite: true },
      { id: 4321, isFavorite: false },
    ];
    const newState = courseReducer(mockCourses, mockAction);
    expect(newState).toEqual(expected);
  });
});
