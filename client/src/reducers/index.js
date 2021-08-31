import { combineReducers } from "redux";

import breaks from './breaks';
import todos from './todos';
import timeLeft from "./timeLeft";

export const reducers = combineReducers({ breaks, timeLeft, todos });