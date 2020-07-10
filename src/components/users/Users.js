import React, { useContext } from 'react'
import User from './User'
import Spinner from '../layout/Spinner'
import GithubContext from '../../context/github/githubContext'

const Users = () => {
  const { loading, users } = useContext(GithubContext)

  if (loading) return <Spinner />
  return (
    <div className='grid-3' style={userStyle}>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  )
}
const userStyle = {
  display: 'grid',
  // gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}
export default Users
