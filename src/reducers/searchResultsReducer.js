export const searchResultsReducer = (state = false, action) => {
	switch (action.type) {
		case 'TOGGLE_SEARCH_RESULTS':
			return state = !state;
		default:
			return state;
	}
}