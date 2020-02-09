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
    const testCommit = true
    console.log(testCommit)
    // const user = { id: 100, name: 'Howard Moon'}
    // const userWithPass = { ...user, id: 100, password: 'Password!' }
    //* user --> { id: 100, name: 'Howard Moon' }
    //* userWithPass --> { id: 100, name: 'Howard Moon', password: 'Password!' }
    // const userRemovePass = {userWithPass, ...rest}

    switch (action.type) {
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            };
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            };
        case CLEAR_USERS:
            return {
                ...state,
                users: [],
                loading: false
            };
        case GET_REPOS:
            return {
                ...state,
                repos: action.payload,
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            throw Error(`Unhandled Action: ${action.type}`);
        // default:
        //     return state
    }
};
