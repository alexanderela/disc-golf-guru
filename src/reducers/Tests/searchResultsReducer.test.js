import { searchResultsReducer } from '../searchResultsReducer';

describe('searchResultsReducer', () => {
  it('should return default state when no type is provided', () => {
    const expected = false;
    const result = searchResultsReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should toggle boolean and set new value as new state', () => {
    const mockAction = {
      type: 'TOGGLE_SEARCH_RESULTS',
    };
    const expected = searchResultsReducer(false, mockAction);
    const result = true;
    expect(result).toEqual(expected);
  });
});
