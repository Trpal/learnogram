export default function users(state = { loggedIn: false }, action) {
	console.log("inReducer");
	switch (action.type) {
	case "LOGIN":
		return { loggedIn: true };
	case "LOGOUT":
		return { loggedIn: false };
	default:
		return state;
	}
}
