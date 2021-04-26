import styled from "styled-components";



export const InputStyles = styled.input<{
  placeholder: any
  search?: boolean
  disabled?: boolean}>`
  input[type="datetime-local"] {
    width: 100%;
  }

  width: 100%;
  border: 0.5px solid #d1d1d1;
  background: ${(props) => (props.search ? `#FFFFFF;` : "#F6F6F6;")};
  border-radius: 4px;
  box-sizing: border-box;

  font-style: normal;
  font-size: 14px;
  line-height: 24px;
  color: #303030;
  padding: 8px 12px 8px;
  transition: 0.5s;

  &:disabled {
    color: #d1d1d1;
  }
  ${(props) =>
    props.disabled || props.search
      ? `&:focus {
        outline: none;
      };`
      : `&:hover {
      background: #D1D1D1;
      };
      &:active {
        background: #F6F6F6;
        transition: 0s;
        };
      &:focus {
        background: #F6F6F6;
        box-shadow: 0px 0px 5px #D9D9D9;
        outline: none;
      };`};
`;
