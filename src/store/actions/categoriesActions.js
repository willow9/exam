export const addCategory = (category) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("categories")
      .add({
        title: "new categorie",
      })
      .then(() => {
        dispatch({ type: "ADD_CATEGORY", category });
      })
      .catch((err) => {
        console.log("add category error: " + err);
      });
  };
};
