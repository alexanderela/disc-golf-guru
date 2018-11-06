import { weatherReducer } from '../weatherReducer';
import mockWeather from '../../mockData/mockWeather.js';

describe('weatherReducer', () => {

	it('should return default state when no type is provided', () => {
		const expected = [];
		const result = weatherReducer(undefined, {});
		expect(result).toEqual(expected);
	})

	it('should set current weather as new state', () => {
			const mockAction =  {
				type: 'SET_WEATHER',
				weather: mockWeather  	
			}
			const expected = weatherReducer([], mockAction);
			expect(expected).toEqual(mockWeather);
	})
})