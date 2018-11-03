export const setCourses = (courses) => ({
	type: 'SET_COURSES',
	courses
})

export const setSelectedCourse = (course) => ({
	type: 'SET_SELECTED_COURSE',
	course
})

export const toggleFavorite = (courseId) => ({
	type: 'TOGGLE_FAVORITE',
	courseId
})


