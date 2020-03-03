//? any change to the states would go through here
import {
	SEARCH_USERS,
	SET_LOADING,
	CLEAR_USERS,
	GET_USER,
	GET_REPOS
} from '../types'

//! whenever something dispatched to here, the states would be copied with new value  (states are immutable)
export default (state, action) => {
	switch (action.type) {
		case SEARCH_USERS:
			return {
				...state,
				users: action.payload,
				loading: false
			}
		case GET_USER:
			return {
				...state,
				user: action.payload,
				loading: false
			}

		case GET_REPOS:
			return {
				...state,
				repos: action.payload,
				loading: false
			}
		case SET_LOADING:
			return {
				...state,
				loading: true
			}
		case CLEAR_USERS:
			return {
				...state,
				users: [],
				loading: false
			}
		default:
			throw Error(`Unhandled Action: ${action.type}`)
	}
}
