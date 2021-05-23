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
        <IntermediateBlock>
          <ForSign>
            <p>{signIn ? 'Sign In' : 'Sign Up'}</p>
          </ForSign>
          <main>{children}</main>
          <SignDescription>
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
          </SignDescription>
        </IntermediateBlock>
      </SignStyles>
      <SignImage signIn={signIn}>
        <img src={signIn ? signInImg : signUpImg} alt="signImg"/>
      </SignImage>
    </SignComponentStyles>
  )

const SignComponentStyles = styled.div<{ signIn?: boolean }>`
  height: 100vh;
  align-items: center;
  display: flex;

  @media screen and (max-height: 540px) {
    margin: ${props => !props.signIn && '20% 0;'};
  }
`

const SignStyles = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;

  @media screen and ${deviceMax.md} {
    width: 100%;
  }
`

const IntermediateBlock = styled.div`
  max-width: 100%;
  padding: 0 5%;

  div {
    max-width: 100%;
  }

  button {
    max-width: 100%;
  }

  @media screen and ${deviceMax.md} {
    span {
      text-align: center;
    }

    width: 100%;
    padding: 0 24px;
  }
`

const ForSign = styled.div`
  font-size: 36px;
  color: ${theme.blue};
`

const SignDescription = styled.div`
  font-size: 15px;
  color: ${theme.grey};
  text-align: center;

  a {
    color: ${theme.red};
  }
`

const SignImage = styled.div<{ signIn?: boolean }>`
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
  @media screen and ${deviceMax.md} {
    display: none;
  };
  @media screen and (max-height: 540px) {
    height: ${props => !props.signIn && '230vh;'};
    width: 100%;
  }
`

