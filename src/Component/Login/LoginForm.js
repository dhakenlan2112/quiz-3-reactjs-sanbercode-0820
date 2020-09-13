import React, {useContext, useState} from 'react'
import {LoginContext} from './LoginContext'

const LoginForm = () => {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [login, setLogin] = useContext(LoginContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        setLogin([...login, {user, password}])
        setUser("")
        setPassword("")
    }

    const handleChangeUser = (event) => {
        setUser(event.target.value)
    }
    
    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    return (
        <>
        <div className="container">
        <h1 className="center">LOGIN</h1>
        <form className="login" onSubmit={handleSubmit}>
            <div className="label">Username</div>
            <input type='text' value={user} onChange={handleChangeUser}></input>
            <div className="label">Password</div>
            <input type='password' value={password} onChange={handleChangePassword}></input>
            <div><button>Login</button></div>
        </form>
        </div>
        </>
    )
}

export default LoginForm;