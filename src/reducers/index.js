import { combineReducers } from 'redux';
import { courseReducer } from './courseReducer';
import { weatherReducer } from './weatherReducer';
import { hasErroredReducer } from './hasErroredReducer';
import { searchResultsReducer } from './searchResultsReducer';
import { courseDetailsReducer } from './courseDetailsReducer';

export const rootReducer = combineReducers({
	golfCourses: courseReducer,
	weather: weatherReducer,
	searchResultsSelected: searchResultsReducer,
	courseDetailsSelected: courseDetailsReducer,
	hasErrored: hasErroredReducer
});