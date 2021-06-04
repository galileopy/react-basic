import { combineEpics } from "redux-observable";

import log from "./log";
export default combineEpics(log);
