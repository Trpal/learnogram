export const USER_LOGIN = "users:LOGIN";
export const USER_LOGOUT = "users:LOGOUT";

// login
export function login(user) {
	return {
		type: USER_LOGIN,
		payload: {
			user
		}
	};
}

// logout
export function logout() {
	return {
		type: USER_LOGOUT,
		payload: {
			user: ""
		}
	};
}
