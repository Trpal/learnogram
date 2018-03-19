// login
export function login() {
	console.log("login");
	return {
		type: "LOGIN"
	};
}

// logout
export function logout() {
	console.log("logout");
	return {
		type: "LOGOUT"
	};
}
