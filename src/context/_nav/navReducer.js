import { SET_NAV_TITLE } from '../types'

export default (state, action) => {
    switch (action.type) {
        case SET_NAV_TITLE:
            return {
                ...state,
                title: action.payload
            }
        default:
            throw Error(`Unhandled Action: ${action.type}`)
        // default:
        //     return state
    }
}
