import React, { Fragment } from 'react'

const AboutUserItemInOne = (props) => {
	const { user } = props

	return (
		<Fragment>
			<div className='card text-center'>
				<div className='badge badge-primary'>Followers : {user.followers}</div>
				<div className='badge badge-success'>Followings : {user.following}</div>
				<div className='badge badge-danger'>
					Public-Repos : {user.public_repos}
				</div>
				<div className='badge badge-dark'>
					Public-Gists : {user.public_gists}
				</div>
			</div>
		</Fragment>
	)
}
export default AboutUserItemInOne
