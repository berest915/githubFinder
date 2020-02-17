import React, { Fragment, useEffect, useContext } from 'react'
import AboutUserItem from './AboutUserItem'
import GithubContext from '../../context/github/githubContext'
import Spinner from '../layout/Spinner'

const About = () => {
  const { users, fetchUsers, loading } = useContext(GithubContext)

  useEffect(() => {
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
      <h2>A sample to test the response from github-api </h2>

      {users.map((user) => (
        <AboutUserItem key={user.id} passUser={user} />
      ))}
    </Fragment>
  )
}

export default About
