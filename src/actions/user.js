// login
export function login(user) {
	return {
		type: "user:LOGIN",
		payload: {
			user
		}
	};
}

// logout
export function logout() {
	return {
		type: "user:LOGOUT",
		payload: {
			user: ""
		}
	};
}
