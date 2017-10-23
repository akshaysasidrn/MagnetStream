import { combineReducers } from "redux";
import streamReducer from "./stream-reducer";
import pageReducer from "./page-reducer";

export default combineReducers({
  stream: streamReducer,
  page: pageReducer
});
