import { toggleSearchResults } from '../searchResultsActions';

describe('searchResultsactions', () => {
  describe('toggleSearchResults', () => {
    it('should have a type of TOGGLE_SEARCH_RESULTS', () => {
      const expected = {
        type: 'TOGGLE_SEARCH_RESULTS',
      };
      const result = toggleSearchResults();
      expect(expected).toEqual(result);
    });
  });
});
