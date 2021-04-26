import styled from "styled-components"
import {deviceMin, verticalDeviceMax} from "../Primitives"

export const SideBarMobileStyles = styled.div<{menuActive: boolean}>`
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

export const SidebarMenuMobileStyles = styled.div<{menuActive: boolean}>`
  transform: ${props => props.menuActive ? 'translateX(0)' : 'translateX(-100%)'};
  transition: 0.5s;
  width: 50%;
  height: 90vh;
  background-color: #fff;
  overflow: hidden;

  div {
    cursor: pointer;
  };

  div:first-child {
    border-bottom: 0.5px solid #9C9C9C;
    grid-gap: 5%;
    padding-top: 3vh;
    padding-bottom: 3vh;
  };

  .sign_out_E {
    color: #FF768E;
    grid-gap: 3%;
    margin-top: 52vh;
    margin-bottom: 5vh;
  };


  .active {
    filter: contrast(50%) sepia(100%) hue-rotate(318deg) brightness(0.8) saturate(500%);
  };

  a {
    margin-top: 3vh;
    text-decoration: none;
    grid-gap: 3%;
    color: #9C9C9C;
  };

  & > * {
    display: flex;
    align-items: center;
    padding-left: 3vh;
  };
  
  @media screen and ${verticalDeviceMax.esm} {
    .sign_out_E {
      margin-top: 40vh;
    }
  }
`