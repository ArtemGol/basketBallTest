import styled from "styled-components"
import {deviceMin} from "../Primitives"

export const BurgerButtonStyles = styled.nav<{menuActive: boolean}>`
  position: absolute;
  left: 5%;
  border-radius: 4px;
  background: ${props => props.menuActive ? '#F6F6F6' : 'none'};

  .burger-btn {
    width: 30px;
    height: 30px;
    justify-content: center;
    position: relative;
    margin-top: 20%;
    margin-bottom: -20%;
    border-radius: 10px;
  };

  .burger-btn:before {
    content: '';
    position: absolute;
    top: 0;
    width: 18px;
    background-color: #DADADA;
    height: 2px;
    border-radius: 100px;
  };

  .burger-btn span {
    content: '';
    position: absolute;
    top: 8px;
    width: 18px;
    background-color: #DADADA;
    height: 2px;
    border-radius: 100px;
  };

  .burger-btn:after {
    content: '';
    position: absolute;
    bottom: 12px;
    width: 18px;
    background-color: #DADADA;
    height: 2px;
    border-radius: 100px;
  };

  @media screen and ${deviceMin.md} {
    display: none;
  };
`