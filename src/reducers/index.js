import { combineReducers } from 'redux';
import { courseReducer } from './courseReducer';
import { weatherReducer } from './weatherReducer';
import { hasErroredReducer } from './hasErroredReducer';
import { cardReducer } from './cardReducer';

export const rootReducer = combineReducers({
  golfCourses: courseReducer,
  weather: weatherReducer,
  cardSelected: cardReducer,
  hasErrored: hasErroredReducer,
});
