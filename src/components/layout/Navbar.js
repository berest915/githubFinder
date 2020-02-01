import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

//* passed
const Navbar = (props) => {

    const { icon, title } = props
    return (
        <nav className='navbar bg-primary'>
            <Link to='/'>
                <h1>
                    <i style={{ marginRight: '1rem' }} className={icon}></i>
                    {title}
                </h1>
            </Link>
            <ul>
                <li><Link to='/'>Homepage</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </nav>
    )
}
// ** if no props is passed, 'defaultProps' will pass own objects into props
// ** if props, then props takeover
Navbar.defaultProps = {
    icon: 'fab fa-github',
    title: 'Github Finder'
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}
export default Navbar
