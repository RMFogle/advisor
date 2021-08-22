import { combineReducers } from "redux";

import breaks from './breaks';
import timeLeft from "./timeLeft";

export const reducers = combineReducers({ breaks, timeLeft, });