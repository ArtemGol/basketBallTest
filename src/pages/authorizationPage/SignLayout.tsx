import React, {FC} from 'react'
import {SignComponentStyles, SignStyles} from "../../styles/forAuthorization/SignStyles"
import signInImg from "../../assets/images/signinimg.png"
import signUpImg from '../../assets/images/signupimg.png'
import {NavLink} from "react-router-dom"
import {LoginRoute} from "../../LoginRoute"
import {SignInPath, SignUpPath} from "../routes";

export const SignLayout: FC<{signIn?: boolean}> = ({
                                                      children,
                                                      signIn}) => {
    return (
        <LoginRoute>
            <SignComponentStyles signIn={signIn}>
                <SignStyles>
                    <div className={'intermediateBlock'}>
                <span className={'forSign'}>
                    <p>{signIn ? 'Sign In' : 'Sign Up'}</p>
                </span>
                        <main>{children}</main>
                        <div className={'signDescription'}>
                            {signIn
                                ? 'Not a member yet?'
                                : 'Already a member?'
                            }&ensp;
                            {signIn
                                ? <NavLink to={SignUpPath}>
                                    Sign Up
                                </NavLink>
                                : <NavLink to={SignInPath}>
                                    Sign In
                                </NavLink>
                            }
                        </div>
                    </div>
                </SignStyles>
                <div className={'signImage'}>
                    <img src={signIn ? signInImg : signUpImg} alt="signImg"/>
                </div>
            </SignComponentStyles>
        </LoginRoute>
    )
}