import { courseDetailsReducer } from '../courseDetailsReducer';

describe('courseDetailsReducer', () => {
  it('should return default state when no type is provided', () => {
    const expected = false;
    const result = courseDetailsReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should toggle boolean and set new value as new state', () => {
    const mockAction = {
      type: 'TOGGLE_COURSE_DETAILS',
    };
    const expected = courseDetailsReducer(false, mockAction);
    const result = true;
    expect(expected).toEqual(result);
  });
});
