import * as DataCleaner from '../DataCleaner';
import * as API from '../API';
import * as APIKey from '../apiKeys'

describe('DataCleaner', () => {
	describe('fetchGolfCoursesByZip', () => {
		let url;

		beforeEach(() => {
			url = `https://www.dgcoursereview.com/api_test/?key=${APIKey.discGolfKey}&mode=findzip&zip=14526&rad=10&sig=${APIKey.discGolfSig}`
		})

		it('should call fetchData with the correct parameters', () => {

		})

		it('should return a resolved array', () => {
			
		})
	})
})