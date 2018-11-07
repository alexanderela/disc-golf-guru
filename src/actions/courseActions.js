export const setCourses = courses => ({
  type: 'SET_COURSES',
  courses,
});

export const toggleFavorite = courseId => ({
  type: 'TOGGLE_FAVORITE',
  courseId,
});

export const toggleSearchResults = () => ({
  type: 'TOGGLE_SEARCH_RESULTS',
});

export const toggleCourseDetails = () => ({
  type: 'TOGGLE_COURSE_DETAILS',
});
