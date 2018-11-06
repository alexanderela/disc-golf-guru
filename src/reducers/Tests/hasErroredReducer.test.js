import { hasErroredReducer } from '../hasErroredReducer';

describe('hasErroredReducer', () => {
  it('should return default state when no type is provided', () => {
    const expected = false;
    const result = hasErroredReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should set hasErrored boolean to state', () => {
    const mockAction = {
      type: 'HAS_ERRORED',
      hasErrored: true,
    };
    const expected = hasErroredReducer(true, mockAction);
    expect(expected).toEqual(true);
  });
});
