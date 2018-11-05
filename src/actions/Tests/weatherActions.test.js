import { setWeather } from '../weatherActions';

describe('weatherActions', () => {
	describe('setWeather', () => {
		it('should have a type of SET_WEATHER', () => {
			const weather =  {
				id: 1234,
				temp: 60,
				description: 'Cloudy)',
				wind: 45,
				humidity: 45
			}
			const expected = {
				type: 'SET_WEATHER',
				weather
			}
			const result = setWeather(weather)
			expect(result).toEqual(expected)
		})
	})
})