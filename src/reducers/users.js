import { USER_LOGIN, USER_LOGOUT } from "../actions/user";

export default function users(
	state = { loggedIn: false, user: "test" },
	action
) {
	switch (action.type) {
	case USER_LOGIN:
		return {
			user: action.payload.user,
			loggedIn: true
		};
	case USER_LOGOUT:
		return {
			user: "",
			loggedIn: false
		};
	default:
		return state;
	}
}
