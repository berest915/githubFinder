import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'

const Search = () => {

    const githubContext = useContext(GithubContext)
    const alertContext = useContext(AlertContext)
    const { setAlert } = alertContext

    const [title, setTitle] = useState('')
    
    const onChange = (e) => {
        setTitle(e.target.value)
        // this.setState({
        //     [e.target.name]: e.target.value)}
    }

    const onSubmit = e => {
        e.preventDefault()
        if (title === '') {
            setAlert('nothing is filled', 'light')
        } else {
            githubContext.searchUsers(title)
            setTitle('')
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit} className='form'>
                <input
                    type="text"
                    name="title"
                    placeholder=" search users here .. "
                    value={title}
                    onChange={onChange}
                />
                <input
                    type="submit"
                    value="search"
                    className='btn btn-dark btn-block'
                />
            </form>
            {githubContext.users.length > 0 &&
                <button className="btn btn-light btn-block"
                    onClick={githubContext.clearUsers}
                >Clear</button>}
        </div>
    )

}
// Search.propTypes = {
    // clearUsers: PropTypes.func.isRequired,
    // isClear: PropTypes.bool.isRequired,
//     showAlert: PropTypes.func.isRequired,
// }
export default Search
