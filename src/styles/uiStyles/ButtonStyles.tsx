import styled from "styled-components";
import { deviceMax } from "../Primitives";

export const ButtonStyles = styled.button<{add: boolean, cancel: boolean}>`
  min-width: 104px;
  height: 40px;
  cursor: pointer;
  border-radius: 4px;
  background-color: #e4163a;
  border: none;
  color: #ffffff;
  ${(props) => {
    switch (props.add || props.cancel || null) {
      case props.add:
        return `width: 104px;`;
      case props.cancel:
        return `width: 171px;
                background-color: #FFFFFF;
                border: 1px solid #D1D1D1;
                color: #D1D1D1;`;
      default:
        return `width: 366px;`;
    }
  }};

  font-style: normal;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;

  &:disabled {
    background-color: #f6f6f6;
    opacity: 0.5;
    color: #d1d1d1;
    transition: 0s;
  }

  ${(props) =>
    props.disabled
      ? `cursor: default;`
      : `&:hover { ${
          props.cancel
            ? "background-color: #D1D1D1; color: #818181;"
            : "background-color: #FF5761;"
        }}`}
  ${(props) =>
    props.disabled
      ? "cursor: default;"
      : `&:active { ${
          props.cancel
            ? "background-color: #9C9C9C; color: #707070; transition: 0s;"
            : "background-color: #C60E2E; transition: 0s;"
        }}`}
  ${(props) =>
    props.cancel
      ? `&:focus {
      outline: none;
      background-color: #9C9C9C; 
      color: #707070;}`
      : `&:focus {
      outline: none;
      background-color: #C60E2E;}`};
  img {
    filter: ${(props) => (props.disabled ? "" : "brightness(100)")};
  }

  @media screen and ${deviceMax.md} {
    width: 100%;
  } ;
`;
