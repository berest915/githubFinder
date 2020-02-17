//? any change to the states would go through here
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  FETCH_USERS,
  GET_SINCE_USER,
  CLONE_USERS,
  RESET_LOOP
} from '../types'

//! whenever something dispatched to here, the states would be copied with new value  (states are immutable)
export default (state, action) => {
  switch (action.type) {
    case CLONE_USERS:
      return {
        ...state,
        clone_users: action.payload,
        // clone_users: [...action.payload],
        loop: true
      }
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      }
    case RESET_LOOP:
      return {
        ...state,
        loop: false
      }
    case GET_SINCE_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      }

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
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
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
    default:
      throw Error(`Unhandled Action: ${action.type}`)
    // default:
    //     return state
  }
}
