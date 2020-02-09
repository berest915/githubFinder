import React, { useReducer } from 'react'
import AlertContext from './alertContext'
import AlertReducer from './alertReducer'
import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types'

const AlertState = (props) => {
    const initialState = null
    //! init where-to-dispatch to x_Reducer whenever dispatch() is called  # while initialState passed as first argument ?
    const [state, dispatch] = useReducer(AlertReducer, initialState)

    // set alert
    const setAlert = (msg, color) => {
        dispatch({
            type: SET_ALERT,
            payload: { msg, color }
        })
       
        setTimeout(() => dispatch({ type: REMOVE_ALERT }), 1500)
    }

    return <AlertContext.Provider
        //! make it available to entire App
        value={{
            alert: state,
            setAlert
        }}
    >
        {props.children}
    </AlertContext.Provider>
}
export default AlertState


