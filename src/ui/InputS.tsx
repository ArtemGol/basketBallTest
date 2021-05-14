import styled from "styled-components";
import {theme} from "../assets/constants/primitives";

interface IProps {
  map?: boolean
  ref?: any
  placeholder?: any
  search?: boolean
  disabled?: boolean
  error?: string
  password?: boolean
}

export const InputS = styled.input<IProps>`
  margin-top: ${props => props.map && '8px'};
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  };
  width: 100%;
  border: ${props => props.error ? `1px solid ${theme.lightestRed}` : `0.5px solid ${theme.lightestGrey}`};
  background: ${(props) => (props.search ? `${theme.white}` : `${theme.lightestGrey1}`)};
  border-radius: 4px;
  box-sizing: border-box;

  font-style: normal;
  font-size: 14px;
  line-height: 24px;
  color: ${theme.darkGrey};
  padding: 8px 12px 8px;
  transition: 0.5s;

  &:disabled {
    color: ${theme.lightestGrey};
  }
  ${(props) =>
    props.disabled || props.search
      ? `&:focus {
        outline: none;
      };`
      : `&:hover {
      background: ${theme.lightestGrey};
      };
      &:active {
        background: ${theme.lightestGrey1};
        transition: 0s;
        };
      &:focus {
        background: ${theme.lightestGrey1};
        box-shadow: 0px 0px 5px #D9D9D9;
        outline: none;
      };`};
`;
