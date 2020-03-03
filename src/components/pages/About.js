import React, { Fragment, useContext } from 'react'
import GithubContext from '../../context/github/githubContext'
import Spinner from '../layout/Spinner'

const About = () => {
	const { loading } = useContext(GithubContext)

	if (loading) return <Spinner />
	return (
		<Fragment>
			<h1>About this App</h1>
			<p>hey this is to search for github users</p>
			<p>version 1.0.0</p>
		</Fragment>
	)
}

export default About
