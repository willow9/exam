import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import questionReducer from "./questionReducer";

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  questions: questionReducer,
});

export default rootReducer;
