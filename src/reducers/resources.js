import { RECEIVE_RESOURCES } from "../actions/resource";

export default function resources(state = { items: [] }, action) {
	switch (action.type) {
	case RECEIVE_RESOURCES:
		return { items: [action.payload.data.title] };
	default:
		return state;
	}
}
