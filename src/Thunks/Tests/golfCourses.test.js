import { setCourses } from '../../actions/courseActions';
import * as DataCleaner from '../../utilities/DataCleaner';
import { fetchGolfCourses } from '../golfCourses.js';

describe('fetchGolfCourses', () => {
	let mockDispatch;

	beforeEach(() => {
		mockDispatch = jest.fn();
	})

	it('should call fetchGolfCoursesByZip with correct parameters', () => {
		DataCleaner.fetchGolfCoursesByZip = jest.fn()
		const thunk = fetchGolfCourses(14526)
		thunk(mockDispatch)
		expect(DataCleaner.fetchGolfCoursesByZip).toHaveBeenCalledWith(14526)
	})

	it('should call dispatch with setCourses', async () => {
		DataCleaner.fetchGolfCoursesByZip = jest.fn(() => Promise.resolve({
			name: 'Rochester'
		}))
		const mockAction = setCourses({name: 'Rochester'})

		const thunk = await fetchGolfCourses(14526)
		await thunk(mockDispatch)
		expect(mockDispatch).toHaveBeenCalledWith(mockAction)		
	})

	it('should console.log and error if thunk has failed', async () => {
      const expected = Error({
        	error: { message: '404'}
        })
      DataCleaner.fetchGolfCoursesByZip = jest.fn().mockImplementation(() => Promise.resolve({
        status: 404,
        json: () => Promise.resolve({
        	error: { message: '404'}
        })
      }))

			const thunk = await fetchGolfCourses(14526)
			await thunk(mockDispatch)
			expect(window.fetch).toThrow(expected)	
    })
})