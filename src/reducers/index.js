import counterReducer from "./counter";
import isLoggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  isLogged: isLoggedReducer,
  counter: counterReducer
});

export default allReducer;
