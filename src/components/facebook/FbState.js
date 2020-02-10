import React, { useReducer } from 'react'
//! Context
import FbContext from './fbContext'
import FbReducer from './fbReducer'
import {GET_RESPONSE} from '../../context/types'

const FbState = (props) => {
    const initialState = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }
    const [state, dispatch] = useReducer(FbReducer, initialState)
    
    const getResponse = (resp) => {
        dispatch({
            type: GET_RESPONSE,
            payload: resp
        })
    }

    return (
        <FbContext.Provider
            value={{
                isLoggedIn: state.isLoggedIn,
                userID: state.userID,
                name: state.name,
                email: state.email,
                picture: state.picture,
                getResponse
            }}
        >
            {props.children}
        </FbContext.Provider>
    )
}
export default FbState
