import React, { useReducer } from 'react'
import axios from 'axios'
import GithubContext from './githubContext'
import GithubReducer from './githubReducer'

import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types'

let githubClientID
let githubClientSecret
if(process.env.NODE_ENV !== 'production'){
    githubClientID = process.env.REACT_APP_GITHUB_CLIENT_ID
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET
}else{
    githubClientID = process.env.GITHUB_CLIENT_ID
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET
}


const GithubState = (props) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
        // alert: null
    }
    //! init Reducer
    const [state, dispatch] = useReducer(GithubReducer, initialState)

    // search users
    const searchUsers = async (title) => {
        setLoading()
        // const setLoading = dispatch({ type: SET_LOADING })

        // ** this GET request returns match results but not only limited to the username, 
        // ** it dep on the website, might refer to https://developer.github.com/v3/ for more details
        const res = await axios.get(`https://api.github.com/search/users?q=${title}&
        client_id=${githubClientID}&
        client_secret=${githubClientSecret}`)

        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        })
    }

    // get user
    const getUser = async (username) => {
        setLoading()

        const res = await axios.get(`https://api.github.com/users/${username}?
        client_id=${githubClientID}&
        client_secret=${githubClientSecret}`)

        dispatch({
            type: GET_USER,
            payload: res.data
        })
    }

    // get repos
    const getUserRepos = async (username) => {
        setLoading()
    
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&
        client_id=${githubClientID}&
        client_secret=${githubClientSecret}`)
    
        dispatch({
            type: GET_REPOS,
            payload: res.data
        })
      }

    // clear users
    const clearUsers = () => dispatch({ type: CLEAR_USERS })

    // set loading
    //! dispatch 'type' to reducer, then reducer copy and renew state, then pass to needed components
    const setLoading = () => { dispatch({ type: SET_LOADING }) }

    return <GithubContext.Provider
        //! make it available to entire App
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUsers,
            getUser,
            clearUsers,
            getUserRepos
            // alert: state.alert
        }}
    >
        {props.children}
    </GithubContext.Provider>
}
export default GithubState


