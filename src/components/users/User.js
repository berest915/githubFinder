import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const User = (props) => {
 
    const { login, avatar_url } = props.user
    return (
        <div className="card text-center">
            <img
                src={avatar_url}
                alt="avatar icon"
                className="round-img"
                style={{ width: '60px' }}
            />
            <h3>{login}</h3>
            <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
                More Info
            </Link>
        </div>
    )
}
User.propTypes = {
    user: PropTypes.object.isRequired
}
export default User
