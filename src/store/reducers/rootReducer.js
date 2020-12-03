import categoryReducer from "./categoryReducer";
import { combineReducers } from "redux";
import questionReducer from "./questionReducer";

const rootReducer = combineReducers({
  cat: categoryReducer,
  quest: questionReducer,
});

export default rootReducer;
