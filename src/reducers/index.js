import { combineReducers } from 'redux';
import { courseReducer } from './courseReducer';
import { searchResultsReducer } from './searchResultsReducer';
import { courseDetailsReducer } from './courseDetailsReducer';

export const rootReducer = combineReducers({
	golfCourses: courseReducer,
	searchResultsSelected: searchResultsReducer,
	courseDetailsSelected: courseDetailsReducer
});