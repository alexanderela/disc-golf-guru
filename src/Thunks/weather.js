import { setWeather } from '../actions/weatherActions';
import { hasErrored } from '../actions/hasErroredAction';
import * as DataCleaner from '../utilities/DataCleaner';

export const fetchWeather = searchTerms => {
  return async dispatch => {
    try {
      const fetchedWeather = await DataCleaner.fetchWeatherData(searchTerms);
      dispatch(setWeather(fetchedWeather));
    } catch (error) {
      dispatch(hasErrored(true));
    }
  };
};
