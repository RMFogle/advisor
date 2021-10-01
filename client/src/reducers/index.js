import { combineReducers } from "redux";

import agendas from './agendas';
import todos from './todos';
import timeLeft from "./timeLeft";

export const reducers = combineReducers({ agendas, timeLeft, todos });