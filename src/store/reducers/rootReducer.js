import categoryReducer from "./categoryReducer";
import { combineReducers } from "redux";
import questionReducer from "./questionReducer";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  cat: categoryReducer,
  quest: questionReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
