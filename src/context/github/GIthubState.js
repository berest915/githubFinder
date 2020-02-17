import React, { useReducer } from 'react'
import axios from 'axios'
//! Context
import GithubContext from './githubContext'
import GithubReducer from './githubReducer'

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

let githubClientID
let githubClientSecret
if (process.env.NODE_ENV !== 'production') {
  githubClientID = process.env.REACT_APP_GITHUB_CLIENT_ID
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET
} else {
  githubClientID = process.env.GITHUB_CLIENT_ID
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET
}
console.log(process.env.NODE_ENV)

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    loop: false,
    clone_users: []
  }
  //! init Reducer
  const [state, dispatch] = useReducer(GithubReducer, initialState)

  // search users
  const searchUsers = async (title) => {
    setLoading()

    // ** GET request returns match results but not only limited to the username,
    // ** it dep on the api, might refer to https://developer.github.com/v3/ for more details

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
  const setLoading = () => {
    dispatch({ type: SET_LOADING })
  }

  // test using fetch
  const fetchUsers = async () => {
    setLoading()

    const res = await axios.get(`https://api.github.com/users?since=0&per_page=5&
    client_id=${githubClientID}&
    client_secret=${githubClientSecret}`)
    // const users = await res.json()
    console.log('fetched')
    // fetch users
    dispatch({
      type: FETCH_USERS,
      payload: res.data
    })
    // clone users
    dispatch({
      type: CLONE_USERS,
      payload: res.data
    })
    dispatch({
      type: GET_USER,
      payload: res.data
    })
   
  }
   // TEST
   const getSinceUser = async (username) => {
    // setLoading()

    // const res = await axios.get(`https://api.github.com/users/${username}?
    //     client_id=${githubClientID}&
    //     client_secret=${githubClientSecret}`)
    // dispatch({
    //   type: GET_SINCE_USER,
    //   payload: res.data
    // })
    
  }
  const cloneUsers = (users) => {
    // console.log('dispatch')
    // console.log(users)
    // dispatch({
    //   type: CLONE_USERS,
    //   payload: users
    // })
  }
  const resetLoop = () => {
    dispatch({
      type: RESET_LOOP
    })
  }
  

  return (
    <GithubContext.Provider
      value={{
        //! states
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        clone_users: state.clone_users,
        loop: state.loop,
     
        //! fn-to-alter-states
        searchUsers,
        getUser,
        clearUsers,
        getUserRepos,
        fetchUsers,
        getSinceUser,
        cloneUsers,
        resetLoop
        
      }}
    >
      {props.children}
      {/*//! make it available to entire App (all components) */}
    </GithubContext.Provider>
  )
}
export default GithubState
