import React, { Fragment, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../layout/Spinner'
import Repos from '../repos/Repos'
import GithubContext from '../../context/github/githubContext'


const User = ({ match }) => {

    const githubContext = useContext(GithubContext)
    const { getUser, user, loading, repos, getUserRepos } = githubContext

    // * when it render to '/:login'  from  '/'
    //* then User component only been rendered, thus toUse componentDidMount
    //! now use functional instead of class
    //* --- refer to docs for useEffect on looping issues if not including ', []'
    useEffect(() => {
        getUser(match.params.login)
        getUserRepos(match.params.login)
        // eslint-disable-next-line
    }, [])

    const {
        name, avatar_url, location, bio, blog, login, html_url,
        followers, following, public_repos, public_gists, company, hireable } = user

    if (loading) return <Spinner />
    return (
        <Fragment>
            <Link to='/' className='btn btn-light'>back to homepage</Link>
            Hireable: {' '}
            {hireable ?
                <i className='fas fa-check text-success' /> : <i className='fas fa-times-circle text-danger' />
            }
            <div className="card grid-2">
                <div className="all-center">
                    <img src={avatar_url} className='round-img' alt='' style={{ width: '150px' }} />
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                </div>
                <div>
                    {bio && <Fragment>
                        <h3>Bio</h3>
                        <p>{bio}</p>
                    </Fragment>}
                    <a href={html_url} className='btn btn-dark my-1' target='_blank' rel='noreferrer noopener'>Visit Github Profile</a>
                    <ul>
                        <li>
                            {login && <Fragment>
                                <strong>Username: </strong>{login}
                            </Fragment>}
                        </li>
                        <li>
                            {blog && <Fragment>
                                <strong>Blog: </strong>{blog}
                            </Fragment>}
                        </li>
                        <li>
                            {company && <Fragment>
                                <strong>Company: </strong>{company}
                            </Fragment>}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card text-center">
                <div className="badge badge-primary">Followers : {followers}</div>
                <div className="badge badge-success">Followings : {following}</div>
                <div className="badge badge-danger">Public-Repos : {public_repos}</div>
                <div className="badge badge-dark">Public-Gists : {public_gists}</div>
            </div>
            <Repos
                repos={repos}
            />
        </Fragment>
    )
}
// User.propTypes = {
    // getUser: PropTypes.func.isRequired,
    // getUserRepos: PropTypes.func.isRequired,
    // user: PropTypes.object.isRequired,
    // repos: PropTypes.array.isRequired,
    // loading: PropTypes.bool.isRequired,
// }
export default User
