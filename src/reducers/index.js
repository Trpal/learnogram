import { combineReducers } from "redux";

import users from "./users";
import resources from "./resources";

const rootReducer = combineReducers({
	resources,
	users
});

export default rootReducer;
