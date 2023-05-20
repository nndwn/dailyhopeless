import React from "react";
import Logo from "../../components/logo";
import Info from "../../components/info";
import Layout from "../../components/layout";
import { pagelogin} from "./style";
import Icons from "../../components/icons";
import { navigate } from "gatsby";
import { handleLogin, isLoggedIn } from "../../services/auth";



const Pagelogin = () => {
    const [text, setText] = React.useState(false)
    function textHandle(){
        setText(!text)
    }
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
    }
    
    return (
        <>
        {isLoggedIn() ? "" :

        <Layout>
            <main css={pagelogin}>
                <section>
                    <Logo
                        size= {50}
                    />
                <div>
                <form 
                    method="post"
                    onSubmit={event => {
                        handleSubmit(event)
                        navigate(`/panel/catlover`)
                    }}>
            <div>
                <div>
                    <input type="text" placeholder="username" name="username" onChange={handleUser} />
                    <label htmlFor="username">username</label>
                </div>
                <div>
                    <input type={ text && true ? "text": "password"} placeholder="password" name="password" onChange={handlePass}/>
                    <label htmlFor="password">password</label>
                    <span >
                        <div id="eye" className="eye"  onClick={textHandle} onKeyDown={textHandle} role="button" tabIndex={0}>
                            <div className="close-eye">
                                <Icons 
                                    icon={"eyeclose"}
                                    size={25}
                                />
                            </div>
                            <div className="open-eye">
                                <Icons
                                    icon={"eyeopen"}
                                    size={25}
                                />
                            </div>
                        </div>
                    </span>
                </div>
            </div>
            <input type="submit" value="Log In" />
        </form>
                    <Info
                      text={"login dulu demi keamanan, username <strong>joko</strong> and password <strong>gantengbanget</strong>"}
                    />
                </div>
                </section>
            </main>
        </Layout>
        }
        </>
    )
}

export default Pagelogin