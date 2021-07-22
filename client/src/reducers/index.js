import { combineReducers } from "redux";

import breaks from './breaks';
import timersReducer from "./timersReducer";
import selectedTimerReducer from "./selectedTimeReducer";

export const reducers = combineReducers({ breaks, timersReducer, selectedTimerReducer });