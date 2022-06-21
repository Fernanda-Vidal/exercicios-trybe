import { combineReducers } from "redux";
import { characterReducer } from "./characterReducer";

export const rootReducer = combineReducers({ characterReducer });