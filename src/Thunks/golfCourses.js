import { setCourses } from '../actions/courseActions';
import { hasErrored } from '../actions/hasErroredAction';
import * as DataCleaner from '../utilities/DataCleaner';

export const fetchGolfCourses = (searchTerms) => {

	return async (dispatch) => {
		try {
			const fetchedGolfCourses = await DataCleaner.fetchGolfCoursesByZip(searchTerms);
			dispatch(setCourses(fetchedGolfCourses))
		} catch(error) {
			dispatch(hasErrored(true))
		}
	}
}

