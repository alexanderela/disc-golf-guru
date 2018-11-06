import { hasErrored } from '../hasErroredAction';

describe('hasErroredAction', () => {
  it('should have a type of HAS_ERRORED', () => {
    const expected = {
      type: 'HAS_ERRORED',
      hasErrored: true,
    };
    const result = hasErrored(true);
    expect(result).toEqual(expected);
  });
});
