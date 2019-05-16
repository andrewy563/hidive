const showDetailReducer = (state = { id: null, index: null, column: null }, action) => {
  if (action.type === 'SHOW_DETAILS') {
    return action.payload;
  }
  return state;
};

export default showDetailReducer;
