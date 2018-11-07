import { cardReducer } from '../cardReducer';

describe('cardReducer', () => {
  it('should return default state when no type is provided', () => {
    const expected = '';
    const result = cardReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should toggle boolean and set new value as new state', () => {
    const mockAction = {
      type: 'TOGGLE_SEARCH_RESULTS',
    };
    const expected = cardReducer(false, mockAction);
    const result = 'search results';
    expect(result).toEqual(expected);
  });

  it('should toggle boolean and set new value as new state', () => {
    const mockAction = {
      type: 'TOGGLE_COURSE_DETAILS',
    };
    const expected = cardReducer(false, mockAction);
    const result = 'course details';
    expect(expected).toEqual(result);
  });
});
