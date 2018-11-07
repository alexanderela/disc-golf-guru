export const setCourses = courses => ({
  type: 'SET_COURSES',
  courses,
});

export const toggleFavorite = courseId => ({
  type: 'TOGGLE_FAVORITE',
  courseId,
});

