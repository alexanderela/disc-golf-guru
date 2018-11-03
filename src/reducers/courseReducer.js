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
		// case 'SET_FAVORITES':
		// 	const favoriteIds = action.favoriteCourses.map(course => course.course_id)
		// 	return state.map(course => {
		// 		if (favoriteIds.includes(course.id)) {
		// 			return {...course, isFavorite: true};
		// 		}
		// 		return course;
		// 	});
	default:
		return state;
	}
}