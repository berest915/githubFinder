import React, { Fragment, useEffect } from 'react'
import NavContext from '../../context/_nav/navContext'
import { useContext } from 'react'

const About = () => {
    // const { setNavTitle } = useContext(NavContext)
    // useEffect(() => {
    //     setNavTitle('About section')
    // }, [])
    return (
        <Fragment>
            
            <h1>About this App</h1>
            <p>hey this is to search for github users</p>
            <p>version 1.0.0</p>
        </Fragment>
    )
}
export default About
