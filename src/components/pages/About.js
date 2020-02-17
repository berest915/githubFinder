import React, { Fragment, useEffect, useContext } from 'react'
import AboutUserItem from './AboutUserItem'
import GithubContext from '../../context/github/githubContext'
import Spinner from '../layout/Spinner'
import AboutUserItemInOne from './AboutUserItemInOne'

const About = () => {
  const { users, loop, resetLoop, clone_users, fetchUsers, loading, cloneUsers } = useContext(GithubContext)
  
 
  useEffect(() => {
    console.log('useEffect called')
    fetchUsers()
   
    // eslint-disable-next-line
  }, []) 
 
  if (loading) return <Spinner />
  
  return (
    //! specify a var_to_change to trigger useEffect (act as dep)
    <Fragment>
      <h1>About this App</h1>
      <p>hey this is to search for github users</p>
      <p>version 1.0.0</p>
      <br />
      <br/>
      <h1>Failed Attempt, planned to exclude it before building>deploying</h1>
      <h2>A sample to test the response from github-api </h2>

      
      {users.map((user) => (
        <AboutUserItem key={user.id} user={user} 
          clone_users={clone_users}
        />
      ))}

    
 
    </Fragment>
  )
}

export default About
