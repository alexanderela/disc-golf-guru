export const setCourses = (courses) => ({
	type: 'SET_COURSES',
	courses
})

export const setSelectedCourse = (course) => ({
	type: 'SET_SELECTED_COURSE',
	course
})

export const clearCourses = () => ({
	type: 'CLEAR_COURSES',
})

export const toggleFavorite = (courseId) => ({
	type: 'TOGGLE_FAVORITE',
	courseId
})


