import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

const allReducers = combineReducers({
  count: counterReducer,
});

export default allReducers;
