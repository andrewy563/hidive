export const selectShow = (id, index, column) => {
  return {
    type: 'SHOW_DETAILS',
    payload: {
      id,
      index,
      column
    }
  };
};

export const INITIAL_STATE = {
  id: -1,
  index: -1,
  columns: -1
};
