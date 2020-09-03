import { createStore } from "redux";
import counterReducer from "../Reducers/counterReducer";
import { combineReducers } from "redux";

const store = createStore(counterReducer);

export default store;
