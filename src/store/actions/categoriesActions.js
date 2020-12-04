export const addCategory = (category) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("categories")
      .add({
        title: category,
      })
      .then(() => {
        // dispatch({ type: "ADD_CATEGORY", category });
      })
      .catch((err) => {
        console.log("add category error: " + err);
      });
  };
};
export const deleteCategory = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("categories")
      .doc(id)
      .delete()
      .then(() => {
        console.log("successfully deleted! ");
      })
      .catch((error) => {
        console.log("Error removing document:", error);
      });
  };
};
export const deleteQuestion = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("quest")
      .doc(id)
      .delete()
      .then(() => {
        console.log("successfully deleted! ");
      })
      .catch((error) => {
        console.log("Error removing document:", error);
      });
  };
};

export const addQuestion = (question) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("quest")
      .add({
        title: question.title,
        catId: question.categoryId,
      })
      .then(() => {})
      .catch((err) => {
        console.log("add question error: " + err);
      });
  };
};
