import styled from "styled-components";
import {deviceMax, theme} from "../assets/constants/primitives";
import {ChangeEvent} from "react";

interface IProps {
  add?: boolean
  cancel?: boolean
  disabled?: boolean
  onClick?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const ButtonS = styled.button<IProps>`
  min-width: 104px;
  height: 40px;
  cursor: pointer;
  border-radius: 4px;
  background-color: ${theme.red};
  border: none;
  color: ${theme.white};
  ${(props) => {
    switch (props.add || props.cancel || null) {
      case props.add:
        return `width: 104px;`;
      case props.cancel:
        return `width: 171px;
                background-color: ${theme.white};
                border: 1px solid ${theme.lightestGrey};
                color: ${theme.lightestGrey};`;
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
    background-color: ${theme.lightestGrey1};
    opacity: 0.5;
    color: ${theme.lightestGrey};
    transition: 0s;
  }

  ${(props) =>
    props.disabled
      ? `cursor: default;`
      : `&:hover { ${
          props.cancel
            ? `background-color: ${theme.lightestGrey}; color: #818181;`
            : `background-color: ${theme.lightRed};`
        }}`}
  ${(props) =>
    props.disabled
      ? "cursor: default;"
      : `&:active { ${
          props.cancel
            ? `background-color: ${theme.lightGrey}; color: ${theme.grey}; transition: 0s;`
            : `background-color: ${theme.darkRed}; transition: 0s;`
        }}`}
  ${(props) =>
    props.cancel
      ? `&:focus {
      outline: none;
      background-color: ${theme.lightGrey}; 
      color: ${theme.grey};}`
      : `&:focus {
      outline: none;
      background-color: ${theme.darkRed};}`};
  img {
    filter: ${(props) => (props.disabled ? "" : "brightness(100)")};
  }

  @media screen and ${deviceMax.md} {
    width: 100%;
  } ;
`;
