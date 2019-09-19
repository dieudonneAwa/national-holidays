export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_HOLIDAY':
      return [...state, action.payload];
    default:
      return state;
  }
};
