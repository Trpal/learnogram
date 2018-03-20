export default function users(state = { loggedIn: false, user: "" }, action) {
	switch (action.type) {
	case "user:LOGIN":
		return {
			user: action.payload.user,
			loggedIn: true
		};
	case "user:LOGOUT":
		return {
			user: "",
			loggedIn: false
		};
	default:
		return state;
	}
}
