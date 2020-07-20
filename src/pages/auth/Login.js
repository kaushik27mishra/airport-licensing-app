import React from 'react'
import LoginForm from '../../components/auth/loginForm/LoginForm'
import './styles.css'

function Login(props) {
    return (
        <div id="login">
            <LoginForm history={props.history}/>
        </div>
    )
}

export default Login
