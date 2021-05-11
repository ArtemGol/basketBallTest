import React, {FC} from 'react'
import signInImg from "../../assets/images/signinimg.png"
import signUpImg from '../../assets/images/signupimg.png'
import {NavLink} from "react-router-dom"
import {mainRoutes} from "../../pages/routes";
import styled from "styled-components";
import {deviceMax, theme} from "../../assets/constants/primitives";

interface IProps {
    signIn?: boolean
}

export const SignLayout: FC<IProps> =
    ({
         children,
         signIn
     }) => (
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
                            ? <NavLink to={mainRoutes.SignUpPath}>
                                Sign Up
                            </NavLink>
                            : <NavLink to={mainRoutes.SignInPath}>
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
    )

const SignComponentStyles = styled.div<{ signIn?: boolean }>`
  height: 100vh;
  align-items: center;
  display: flex;

  .signImage {
    img {
      max-width: 100%;
      max-height: 100%;
    }

    background-size: cover;
    width: 60%;
    height: 100%;
    display: flex;
    grid-gap: 24px;
    align-items: center;
    justify-content: center;
    background: ${theme.aliceBlue};
  }

  @media screen and (max-height: 540px) {
    margin: ${props => !props.signIn && '20% 0;'};

    .signImage {
      height: ${props => !props.signIn && '230vh;'};
      width: 100%;
    }

  ;
  };
  @media screen and ${deviceMax.md} {
    .signImage {
      display: none;
    }

  ;
  }
`

const SignStyles = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;

  .intermediateBlock {
    max-width: 100%;
    padding: 0 5%;

    div {
      max-width: 100%;
    }

    button {
      max-width: 100%;
    }
  }

  .signDescription {
    font-size: 15px;
    color: ${theme.grey};
    text-align: center;

    a {
      color: ${theme.red};
    }
  }

  .forSign {
    font-size: 36px;
    color: ${theme.blue};
  }

  @media screen and ${deviceMax.md} {
    width: 100%;
    .intermediateBlock {
      span {
        text-align: center;
      }

      width: 100%;
      padding: 0 24px;
    }
  }
`