import * as DataCleaner from '../DataCleaner';
import * as API from '../API';
import * as APIKey from '../../apiKeys'
import mockCourses from '../../mockData/mockCourses.js';
import mockWeatherRaw from '../../mockData/mockWeatherRaw.js';
jest.mock('../API');

describe('DataCleaner', () => {
		let url;
		let input;
		let expected;
		let result;
		
	describe('fetchGolfCourseData', () => {
		beforeEach(() => {
			input = 14526;
		})

		it('should call fetchData with the correct parameters if passed valid zip', async () => {
			url = `https://www.dgcoursereview.com/api_test/?key=${APIKey.discGolfKey}&mode=findzip&zip=${input}&rad=10&sig=${APIKey.discGolfSig}`;
			DataCleaner.fetchGolfCourseData(input);
			expect(API.fetchData).toHaveBeenCalledWith(url)
		})

		it('should call fetchData with the correct parameters if passed an invalid zip', async () => {
			input = 'rochester'
			url = `https://www.dgcoursereview.com/api_test/?key=${APIKey.discGolfKey}&mode=findloc&city=${input}&rad=10&state=NY&country=US&sig=${APIKey.discGolfSig}`;
			DataCleaner.fetchGolfCourseData(input);
			expect(API.fetchData).toHaveBeenCalledWith(url)
		})

		it('should return a resolved array', async () => {
			result = await DataCleaner.fetchGolfCourseData(input);
			expect(result).toEqual([]);
		})
	})

	describe('formatGolfCourseData', () => {
		it('should format golf course objects', async () => {
			result = DataCleaner.formatGolfCourseData(mockCourses);
			expect(result).toMatchSnapshot();
		})
	})

	describe('fetchWeatherData', () => {
		beforeEach(() => {
			input = 14526;
		})

		it('should call fetchData with the correct parameters if passed a valid zip', async () => {
			url = `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?zip=${input}&units=imperial&APPID=${APIKey.weatherKey}`;
			DataCleaner.fetchWeatherData(input);
			expect(API.fetchData).toHaveBeenCalledWith(url)

		})

		it('should call fetchData with the correct parameters if passed an invalid zip', async () => {
			input = 'rochester'
			url = `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=${input}&units=imperial&APPID=${APIKey.weatherKey}`
			DataCleaner.fetchWeatherData(input);
			expect(API.fetchData).toHaveBeenCalledWith(url)
		})

		it('should return a resolved object', async () => {
			expected = {
				"description": "Clear sky", 
				"humidity": 76, 
				"icon": "01n", 
				"id": 420026615, 
				"temp": 42.08, 
				"wind": 6.93
			}
			result = await DataCleaner.formatWeatherData(mockWeatherRaw);
			expect(result).toEqual(expected);
		})
	})

	describe('formatWeatherData', () => {
		it('should format weather data', async () => {
			result = DataCleaner.formatWeatherData(mockWeatherRaw);
			expect(result).toMatchSnapshot()
		})
	})

	describe('convertNumberToBoolean', () => {
		it('should convert 0 to the word No', () => {
			const expected = 'No'
			const result = DataCleaner.convertNumberToBoolean('0')
			expect(result).toEqual(expected)
		})

		it('should convert any number except 0 to the word Yes', () => {
			const expected = 'Yes'
			const result = DataCleaner.convertNumberToBoolean('3')
			expect(result).toEqual(expected)			
		})
	})

	describe('validateZip', () => {
		it('should return true if number is a valid zip', () => {
			const result = DataCleaner.validateZip(14526)
			expect(result).toBe(true)
		})	

		it('should return false if number is not a valid zip', () => {
			const result = DataCleaner.validateZip(145268)
			expect(result).toBe(false)		
		})	
	})

	describe('capitalizeString', () => {
		it('should capitalize the first letter in a string', () => {
			const expected = 'Butter'
			const result = DataCleaner.capitalizeString('butter')
			expect(result).toEqual(expected)
		})
	})

})