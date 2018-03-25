import axios from "axios";

export const RECEIVE_RESOURCES = "resources:RECEIVE";

export const receiveResources = data => ({
	type: RECEIVE_RESOURCES,
	payload: {
		data
	}
});

// export function receiveResources(json) {
// 	return {
// 		type: RECEIVE_RESOURCES,
// 		payload: {
// 			user
// 		}
// 	};
// }

export const fetchResources = () => dispatch =>
	axios.get("/api/resources").then(response => {
		console.log(response);
		return dispatch(receiveResources(response.data.resources[0]));
	});
