import React from 'react'
import { useContext } from 'react'
import FbContext from './fbContext'
import FacebookLogin from 'react-facebook-login'

const Facebook = () => {
    let fbContent
    const {
        isLoggedIn,
        // eslint-disable-next-line
        userID,
        name,
        email,
        picture,
        getResponse
    } = useContext(FbContext)

    // const componentClicked = () => {
    //     console.log('component is clicked')
    // }
    const responseFacebook = (resp) => {
        getResponse(resp)
    }

    const setFbContent = (bool) => {
        if (bool === true) {
            fbContent = (
                <div style={userStyle}>
                    <img src={picture} alt={name} />
                    <h2>Welcome {name}</h2>
                    Email: {email}
                </div>
            )
        } else {
            fbContent = (
                <FacebookLogin
                    appId="2590658257884479"
                    autoLoad={false}
                    fields="name,email,picture"
                    // onClick={componentClicked}
                    callback={responseFacebook}
                />
            )
        }
    }
    return (
        <div>
            {setFbContent(isLoggedIn)}
            {fbContent}
        </div>
    )
}
const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '1rem'
}
export default Facebook
