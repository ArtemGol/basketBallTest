import styled from "styled-components"
import {deviceMax} from "../Primitives"

export const SideBarStyles = styled.div`
  grid-area: n;
  display: flex;
  flex-direction: column;
  padding: 32px 0;
  img{
    cursor: pointer;
  }

  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #9C9C9C;
    margin-bottom: 40px;
  };

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  };

  .active {
    filter: contrast(50%) sepia(100%) hue-rotate(318deg) brightness(0.8) saturate(500%);
  };

  @media screen and ${deviceMax.md} {
    display: none;
    margin: 10px;
  };
`