import styled from "styled-components"
import {deviceMax} from "../Primitives"

export const SignComponentStyles = styled.div<{signIn?: boolean}>`
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
    background: #F5FBFF;
  }
  @media screen and (max-height: 540px){
    margin: ${props => !props.signIn && '20% 0;'};
    .signImage{
      height: ${props => !props.signIn && '230vh;'};
      width: 100%;
    };
  };
  @media screen and ${deviceMax.md}{
    .signImage {
      display: none;
    };
  }
`

export const SignStyles = styled.div`
        
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
    color: #707070;
    text-align: center;
    a {
      color: #E4163A;
    }
  }

  width: 40%;
  display: flex;
  justify-content: center;

  .forSign {
    font-size: 36px;
    color: #344472;
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