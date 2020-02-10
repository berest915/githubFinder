import { GET_RESPONSE } from '../../context/types'

export default (state, action) => {
    switch (action.type) {
        case GET_RESPONSE:
            return {
                ...state,
                isLoggedIn: true,
                userID: action.payload.userID,
                name: action.payload.name,
                email: action.payload.email,
                picture: action.payload.picture.data.url
            }
        default:
            throw Error(`Unhandled Action: ${action.type}`)
        // default:
        //     return state
    }
}
