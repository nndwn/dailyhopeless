import React from "react";
import Icons from "../../components/icons";

const FormLogin = ({state}) => {
    const [text, setText] = React.useState(false)
    function textHandle(){
        setText(!text)
    }
    return (
        <form >
            <div>
                <div>
                    <input type="text" placeholder="username" name="username" />
                    <label htmlFor="username">username</label>
                </div>
                <div>
                    <input type={ text && true ? "text": "password"} placeholder="password" name="password"/>
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
            <SignUpbutton/>
            <input type="submit" value="Log In" />
            <ForgotPassButton/>
        </form>
    )
}

export const SignUpbutton =({text,link})=> (
    <p>{ text || "don't have an account ?"} <a href={link}>Sign up</a></p>
)
export const ForgotPassButton = ({text,link}) => (
    <p> {text || "something username or password wrong or your"} <a href={link}>forget password ?</a></p>
)
export default FormLogin