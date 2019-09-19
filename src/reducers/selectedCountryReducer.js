export default (state = [], action) => {
  switch (action.type) {
    case 'COUNTRY_SELECTED':
      return action.payload;
    default:
      return state;
  }
};
