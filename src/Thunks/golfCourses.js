import { setCourses } from '../actions/courseActions';
import * as DataCleaner from '../utilities/DataCleaner';

export const fetchGolfCourses = (searchTerms) => {

	return async (dispatch) => {
		try {
			const fetchedGolfCourses = await DataCleaner.fetchGolfCoursesByZip(searchTerms);
			dispatch(setCourses(fetchedGolfCourses))
		} catch(error) {
			console.log(error.message)
			throw new Error('Fetch has failed')
		}
	}
}

