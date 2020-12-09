export const fetchQuestions = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection("quest")
      .get()
      .then((querySnapshot) => {
        const questions = [];
        querySnapshot.forEach((doc) => {
          questions.push(doc.data());
        });

        dispatch({ type: "FETCH_QUESTIONS", payload: questions });
      })
      .catch((err) => console.log(err));
  };
};
