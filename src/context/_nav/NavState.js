import React, { useReducer } from 'react'
//! Context
import NavContext from './navContext'
import NavReducer from './navReducer'

import { SET_NAV_TITLE } from '../types'

const NavState = (props) => {
    const initialState = {
        icon: 'fab fa-github',
        title: 'Github Finder'
    }
    const [state, dispatch] = useReducer(NavReducer, initialState)

    const setNavTitle = (title) => {
        dispatch({
            type: SET_NAV_TITLE,
            payload: title
        })
    }

    return (
        <NavContext.Provider
        value={{
            icon: state.icon,
            title: state.title,
            setNavTitle
        }}
        >
            {props.children}
        </NavContext.Provider>
    )
}
export default NavState
