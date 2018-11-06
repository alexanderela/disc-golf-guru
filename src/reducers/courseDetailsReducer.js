export const courseDetailsReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_COURSE_DETAILS':
      return (state = !state);
    default:
      return state;
  }
};
