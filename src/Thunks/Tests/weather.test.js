import { setWeather } from '../../actions/weatherActions';
import * as DataCleaner from '../../utilities/DataCleaner';
import { fetchWeather } from '../weather.js';
import { hasErrored } from '../../actions/hasErroredAction';

describe('fetchWeather', () => {
  let mockDispatch;

  beforeEach(() => {
    mockDispatch = jest.fn();
  });

  it('should call fetchWeather with correct parameters', () => {
    DataCleaner.fetchWeatherData = jest.fn();
    const thunk = fetchWeather(14526);
    thunk(mockDispatch);
    expect(DataCleaner.fetchWeatherData).toHaveBeenCalledWith(14526);
  });

  it('should call dispatch with setCourses', async () => {
    DataCleaner.fetchWeatherData = jest.fn(() =>
      Promise.resolve({
        name: 'Rochester',
      })
    );
    const mockAction = setWeather({ name: 'Rochester' });
    const thunk = await fetchWeather(14526);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  });

  it('should show error if thunk has failed', async () => {
    DataCleaner.fetchWeatherData = jest.fn().mockImplementation(() =>
      Promise.reject({
        status: 404,
        json: () =>
          Promise.reject({
            error: { message: '404' },
          }),
      })
    );
    const thunk = await fetchWeather(14526);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored(true));
  });
});
