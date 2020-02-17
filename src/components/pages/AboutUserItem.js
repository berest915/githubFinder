import React, { useContext, useEffect } from 'react'
import Spinner from '../layout/Spinner'
import GithubContext from '../../context/github/githubContext'

const About_UserItem = (props) => {
  const { getSinceUser, user} = useContext(GithubContext)
  const { passUser } = props
  console.log(passUser.login)
  // const { followers } = user.

  // useEffect(() => {
  //   getSinceUser(passUser.login)
  //   // eslint-disable-next-line
  // }, [])

  return (
    <div className="card" style={gridStyle}>
      <div className="all-center">
        <img
          src={user.avatar_url}
          className="round-img"
          style={{ width: '60px' }}
          alt="avatar"
        />
        <a
          style={{ display: 'block' }}
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {user.login}
        </a>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers : {user.followers}</div>
        <div className="badge badge-success">Followings : {user.following}</div>
        <div className="badge badge-danger">
          Public-Repos : {user.public_repos}
        </div>
        <div className="badge badge-dark">
          Public-Gists : {user.public_gists}
        </div>
      </div>
    </div>
  )
}
const gridStyle = {
  display: 'grid',
  width: '100%',
  gridTemplateColumns: ' 1fr 6fr'
}
export default About_UserItem
