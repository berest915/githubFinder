import React, { useState, useContext } from 'react'
import GithubCeontext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'

const Search = () => {
    const githubContext = useContext(GithubCeontext)
    const alertContext = useContext(AlertContext)
    const { searchUsers, clearUsers, users } = githubContext
    const { setAlert } = alertContext

    //! initial local-state & willChange due to input-evt
    const [title, setTitle] = useState('')

    const onChange = (e) => {
        setTitle(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (title === '') {
            setAlert('nothing is filled', 'light')
        } else {
            searchUsers(title)
            setTitle('')
        }
    }
   
    return (
        <div>
            <form onSubmit={onSubmit} className="form">
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
                    className="btn btn-dark btn-block"
                />
            </form>
            {users.length > 0 && (
                <button
                    className="btn btn-light btn-block"
                    onClick={clearUsers}
                >
                    Clear
                </button>
            )}
        </div>
    )
}
export default Search