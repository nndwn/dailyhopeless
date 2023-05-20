import React from "react";

import { navigate } from '@reach/router';
import { handleLogin, isLoggedIn } from "../services/auth";


const Login = () => {
    const [pass, setPass] = React.useState("")
    const [user, setUser] = React.useState("")
    const data = {
        username: user,
        password: pass
    }
  
    const handleUser = event => {
        setUser(event.target.value)
    }
    const handlePass = event => {
        setPass(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        handleLogin(data)
        console.log(data)
    }
    if (isLoggedIn()){
        navigate(`/panel/catlover/`)
        window.location.reload()
    }
    return(
        <>
        {isLoggedIn() ? "": 
        
            <div>
                <h1>Log in</h1>
                <form
                    method="post"
                    onSubmit={event => {
                        handleSubmit(event)
                        navigate(`/panel/catlover`)
                    }}
                >
                    <label>
                        username
                        <input type="text" name="username" onChange={handleUser}/>
                    </label>
                    <label>
                        Password
                        <input type="password" name="password" onChange={handlePass}/>
                    </label>
                    <input type="submit" value="Log in"/>
                </form>
                </div>
        
        }

            </>
    )
}

export default Login
