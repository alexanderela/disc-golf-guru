export const weatherReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_WEATHER':
      return action.weather;
    default:
      return state;
  }
};
