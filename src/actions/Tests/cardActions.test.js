import { showSearchResultsCard, showCourseDetailsCard } from '../cardActions';

describe('searchResultsactions', () => {
  describe('toggleSearchResults', () => {
    it('should have a type of TOGGLE_SEARCH_RESULTS', () => {
      const expected = {
        type: 'TOGGLE_SEARCH_RESULTS',
      };
      const result = showSearchResultsCard();
      expect(expected).toEqual(result);
    });
  });

  describe('toggleCourseDetails', () => {
    it('should have a type of TOGGLE_COURSE_DETAILS', () => {
      const expected = {
        type: 'TOGGLE_COURSE_DETAILS',
      };
      const result = showCourseDetailsCard();
      expect(expected).toEqual(result);
    });
  });
});
