import React, {FC, useState} from 'react'
import logo from '../assets/icon/logo.png'
import authorizedUser from '../assets/icon/profile.png'
import styled from 'styled-components'
import sign_out from '../assets/icon/sign_out.png'
import sign_out_E from '../assets/icon/sign_out_E.png'
import {deviceMax} from "../styles/Primitives"
import {SideBarStyles} from "../styles/WithHeaderSideBarLayoutStyles/DesktopSideBarStyles"
import {BurgerButtonStyles} from "../styles/WithHeaderSideBarLayoutStyles/MobileBurgerButtonStyles"
import {
    SidebarMenuMobileStyles,
    SideBarMobileStyles
} from "../styles/WithHeaderSideBarLayoutStyles/MobileSideBarStyles"
import {GlobalForSidebar} from "./GlobalForSidebar"
import {PrivateRoute} from "../PrivateRoute"

export const WithHeaderSideBarLayout: FC<{details?: boolean}> = (props) => {
    const [menuActive, setMenuActive] = useState(false)
    const myName = localStorage.name

    return (
        <PrivateRoute>
            <WithHeaderSidebarLayoutStyles {...props}>
                <HeaderStyles>
                    <BurgerButtonStyles menuActive={menuActive} onClick={() => setMenuActive(!menuActive)}>
                        <div className="burger-btn">
                            <span/>
                        </div>
                    </BurgerButtonStyles>
                    <img src={logo} alt="logo"/>
                    <div className={'authorizedUser'}>
                        {myName}
                        <img src={authorizedUser} alt="user"/>
                    </div>
                </HeaderStyles>

                <SideBarStyles>
                    <GlobalForSidebar image={sign_out}/>
                </SideBarStyles>

                <SideBarMobileStyles menuActive={menuActive} onClick={() => setMenuActive(false)}>
                    <SidebarMenuMobileStyles menuActive={menuActive} onClick={e => e.stopPropagation()}>
                        <div>
                            <img src={authorizedUser} alt="user"/>
                            {myName}
                        </div>
                        <GlobalForSidebar image={sign_out_E} mobile/>
                    </SidebarMenuMobileStyles>
                </SideBarMobileStyles>

                <Children {...props}>
                    {props.children}
                </Children>
            </WithHeaderSidebarLayoutStyles>
        </PrivateRoute>
    )
}

const WithHeaderSidebarLayoutStyles = styled.div`
  margin: 20px;
  display: grid;
  grid-template-areas:
  "h h"
  "n c";
  grid-template-rows: 80px;
  grid-template-columns: 9.73% 90.27%;

  & > * {
    transition: 0.5s;
  }

  @media screen and ${deviceMax.md} {
    margin: 0;
    display: flex;
    flex-direction: column;
  }
`

const HeaderStyles = styled.div`
  grid-area: h;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 51px;
  box-shadow: 0 1px 10px rgba(209, 209, 209, 0.5);

  div {
    display: flex;
    cursor: pointer;
  }

  .authorizedUser {
    align-items: center;

    img {
      margin-left: 19px;
    }
  }

  @media screen and ${deviceMax.md} {
    position: fixed;
    width: 100%;
    background-color: #fff;
    justify-content: center;
    height: 10vh;
    img {
      width: 134px;
    }

    .authorizedUser {
      display: none;
    }
  };
`

const Children = styled.div<{details?: boolean}>`
  grid-area: c;
  background-color: #F6F6F6;
  padding: 32px 80px;
  @media screen and ${deviceMax.md} {
    padding: 0;
    margin: ${props => props.details ? '12vh 0 10px;' : '12vh 10px 10px;'}
  };
`