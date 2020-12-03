export const addCategory = (category) => {
  return (dispatch, getState) => {
    dispatch({ type: "ADD_CATEGORY", category });
  };
};
