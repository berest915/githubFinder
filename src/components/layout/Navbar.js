import React from 'react'
import NavContext from '../../context/_nav/navContext'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

const Navbar = () => {
    const { icon, title, setNavTitle } = useContext(NavContext)
    const clickedAbout = () => {
        setNavTitle('About Page')
    }
    const clickedHome = () => {
        setNavTitle('Github Finder')
    }
    const clickedFb = () => {
        setNavTitle('Facebook Login')
    }
    return (
        <nav className="navbar bg-primary">
            <Link to="/">
                <h1>
                    <i style={{ marginRight: '1rem' }} className={icon}></i>
                    {title}
                </h1>
            </Link>
            <ul>
                <li>
                    <Link to="/" onClick={clickedHome}>
                        Homepage
                    </Link>{' '}
                </li>
                <li>
                    <Link to="/fb-login" onClick={clickedFb}>
                        Login Fb
                    </Link>{' '}
                </li>
                <li>
                    <Link to="/about" onClick={clickedAbout}>
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar

// const Navbar = (props) => {
//     const { icon, title } = props
//     return (
//         <nav className="navbar bg-primary">
//             <Link to="/">
//                 <h1>
//                     <i style={{ marginRight: '1rem' }} className={icon}></i>
//                     {title}
//                 </h1>
//             </Link>
//             <ul>
//                 <li>
//                     <Link to="/">Homepage</Link>{' '}
//                 </li>
//                 <li>
//                     <Link to="/about">About</Link>
//                 </li>
//             </ul>
//         </nav>
//     )
// }
// // ** if no props is passed, 'defaultProps' will pass own objects into props
// // ** if props, then props takeover
// Navbar.defaultProps = {
//     icon: 'fab fa-github',
//     title: 'Github Finder'
// }
// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     icon: PropTypes.string.isRequired
// }
// export default Navbar
