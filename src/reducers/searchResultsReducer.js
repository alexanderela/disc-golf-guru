export const searchResultsReducer = (state = '', action) => {
  switch (action.type) {
    case 'TOGGLE_SEARCH_RESULTS':
      return state = 'search results';
    case 'TOGGLE_COURSE_DETAILS':
    	return state = 'course details';
    default:
      return state;
  }
};
