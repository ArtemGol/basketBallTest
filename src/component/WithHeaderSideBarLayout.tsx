import React, {FC, useState} from 'react'
import logo from '../assets/icon/logo.png'
import authorizedUser from '../assets/icon/profile.png'
import styled from 'styled-components'
import signOut from '../assets/icon/signOut.png'
import signOutMobile from '../assets/icon/signOutMobile.png'
import {deviceMax, deviceMin, theme, verticalDeviceMax} from "../assets/constants/primitives"
import {GlobalForSidebar} from "./GlobalForSidebar"
import {logout} from "../modules/auth/authSlice";
import {useDispatch} from "react-redux";

interface IProps {
    details?: boolean
}

export const WithHeaderSideBarLayout: FC<IProps> = (props) => {
    const [menuActive, setMenuActive] = useState(false)
    const myName = localStorage.name
    const dispatch = useDispatch()
    const Logout = () => {
        dispatch(logout())
    }

    return (
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
                <GlobalForSidebar image={signOut} Logout={Logout}/>
            </SideBarStyles>

            <SideBarMobileStyles menuActive={menuActive} onClick={() => setMenuActive(false)}>
                <SidebarMenuMobileStyles menuActive={menuActive} onClick={e => e.stopPropagation()}>
                    <div>
                        <img src={authorizedUser} alt="user"/>
                        <span title={myName} className={'authorizedUserName'}>{myName}</span>
                    </div>
                    <GlobalForSidebar image={signOutMobile} mobile Logout={Logout}/>
                </SidebarMenuMobileStyles>
            </SideBarMobileStyles>

            <Children {...props}>
                {props.children}
            </Children>
        </WithHeaderSidebarLayoutStyles>
    )
}

const WithHeaderSidebarLayoutStyles = styled.div`
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
    background-color: ${theme.white};
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

const BurgerButtonStyles = styled.nav<{ menuActive: boolean }>`
  position: absolute;
  left: 5%;
  border-radius: 4px;
  background: ${props => props.menuActive ? `${theme.lightestGrey1}` : 'none'};

  .burger-btn {
    width: 30px;
    height: 30px;
    justify-content: center;
    position: relative;
    margin-top: 20%;
    margin-bottom: -20%;
    border-radius: 10px;
  }
;

  .burger-btn:before {
    content: '';
    position: absolute;
    top: 0;
    width: 18px;
    background-color: ${theme.lightestGrey};
    height: 2px;
    border-radius: 100px;
  }
;

  .burger-btn span {
    content: '';
    position: absolute;
    top: 8px;
    width: 18px;
    background-color: ${theme.lightestGrey};
    height: 2px;
    border-radius: 100px;
  }
;

  .burger-btn:after {
    content: '';
    position: absolute;
    bottom: 12px;
    width: 18px;
    background-color: ${theme.lightestGrey};
    height: 2px;
    border-radius: 100px;
  }
;

  @media screen and ${deviceMin.md} {
    display: none;
  };
`

const SideBarStyles = styled.div`
  grid-area: n;
  display: flex;
  flex-direction: column;
  padding: 32px 0;

  img {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${theme.lightGrey};
    margin-bottom: 40px;
  }
;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
;

  .active {
    filter: contrast(50%) sepia(100%) hue-rotate(318deg) brightness(0.8) saturate(500%);
  }
;

  @media screen and ${deviceMax.md} {
    display: none;
    margin: 10px;
  };
`

const SideBarMobileStyles = styled.div<{ menuActive: boolean }>`
  width: 100%;
  bottom: 0;
  background: ${props => props.menuActive ? 'rgba(65,65,65, 0.6)' : 'none'};
  left: ${props => props.menuActive ? '0' : '-100%'};
  position: fixed;
  z-index: 1;
  @media screen and ${deviceMin.md} {
    display: none;
  };
`

const SidebarMenuMobileStyles = styled.div<{ menuActive: boolean }>`
  transform: ${props => props.menuActive ? 'translateX(0)' : 'translateX(-100%)'};
  transition: 0.5s;
  width: 50%;
  height: 90vh;
  background-color: ${theme.white};
  overflow: hidden;

  div {
    cursor: pointer;
  }
;

  div:first-child {
    border-bottom: 0.5px solid ${theme.lightGrey};
    grid-gap: 5%;
    padding-top: 3vh;
    padding-bottom: 3vh;
  }
;

  .signOutMobile {
    color: ${theme.lightestRed};
    grid-gap: 3%;
    margin-top: 52vh;
    margin-bottom: 5vh;
  }
;


  .active {
    filter: contrast(50%) sepia(100%) hue-rotate(318deg) brightness(0.8) saturate(500%);
  }
;

  a {
    margin-top: 3vh;
    text-decoration: none;
    grid-gap: 3%;
    color: ${theme.lightGrey};
  }
;

  & > * {
    display: flex;
    align-items: center;
    padding-left: 3vh;
  }
;
  @media screen and ${deviceMax.esm} {
    .authorizedUserName {
      width: 110px;
      overflow: hidden;
      text-overflow: ellipsis;
    }

  ;
  }

  @media screen and ${verticalDeviceMax.esm} {
    .signOutMobile {
      margin-top: 40vh;
    }
  }
`

const Children = styled.div<{ details?: boolean }>`
  grid-area: c;
  background-color: ${theme.lightestGrey1};
  padding: 32px 80px;
  @media screen and ${deviceMax.md} {
    padding: 0;
    margin: ${props => props.details ? '12vh 0 10px;' : '12vh 10px 10px;'};
  };
`