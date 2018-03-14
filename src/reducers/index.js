import { combineReducers } from "redux";

import resources from "./resources";
import users from "./users";

const rootReducer = combineReducers({
	resources,
	users
});

export default rootReducer;
