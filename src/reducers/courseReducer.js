export const courseReducer = (state = [], action) => {
	switch (action.type) {
		case 'SET_COURSES':
			return action.courses;
		case 'TOGGLE_FAVORITE':
			return state.map(course => {
				if(course.id === action.courseId) {
					return {...course, isFavorite: !course.isFavorite}
				} else {
					return course
				}
			});
	default:
		return state;
	}
}