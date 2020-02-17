import React, { useContext, Fragment } from 'react'
import AboutUserItemInOne from './AboutUserItemInOne'
import Spinner from '../layout/Spinner'
import GithubContext from '../../context/github/githubContext'

const AboutUserItem = (props) => {
  const { user, clone_users } = props
  var sel

  const hey = (a, b, user) => {
    if (a === b) {
      return  <AboutUserItemInOne key={b} user={user} />
    }
  }
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

      {clone_users.map((clone_user) => (
        sel = hey(clone_user.id, user.id, user)
        ))}
        
    </div>
  )
}
const gridStyle = {
  display: 'grid',
  width: '100%',
  gridTemplateColumns: ' 1fr 6fr'
}
export default AboutUserItem
