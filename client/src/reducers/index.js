import { combineReducers } from "redux";
import streamReducer from "./stream-reducer";

export default combineReducers({
  stream: streamReducer
});
