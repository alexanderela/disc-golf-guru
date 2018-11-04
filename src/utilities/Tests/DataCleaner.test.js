import * as DataCleaner from '../DataCleaner';
import * as API from '../API';
import * as APIKey from '../../apiKeys'
import mockCourses from '../../mockData/mockCourses.js';
jest.mock('../API');

describe('DataCleaner', () => {
		let url;
		let mockZip;
		let expected;
		let result;
		
	describe('fetchGolfCoursesByZip', () => {
		beforeEach(() => {
			mockZip = 14526;
		})

		it('should call fetchData with the correct parameters', async () => {
			url = `https://www.dgcoursereview.com/api_test/?key=${APIKey.discGolfKey}&mode=findzip&zip=${mockZip}&rad=10&sig=${APIKey.discGolfSig}`;
			DataCleaner.fetchGolfCoursesByZip(mockZip);
			expect(API.fetchData).toHaveBeenCalledWith(url)
		})

		it('should return a resolved array', async () => {
			result = await DataCleaner.fetchGolfCoursesByZip(mockZip);
			expect(result).toEqual([]);
		})
	})

	describe('returnGolfCourseData', () => {
		it('should format golf course objects', async () => {
			result = DataCleaner.returnGolfCourseData(mockCourses);
			expect(result).toMatchSnapshot();
		})
	})
})