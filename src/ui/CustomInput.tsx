import React, {ChangeEvent, FC, useState} from "react";
import { InputStyles } from "../styles/uiStyles/InputStyles";
import search from "../assets/icon/search.png";
import styled from "styled-components";
import { deviceMax } from "../styles/Primitives";
import pas from "../assets/icon/pas.png";
import noPas from "../assets/icon/nopas.png";
import forCheckBox from "../assets/icon/forCheckbox.png";

export const CustomInput: FC<{
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    disabled?: boolean
    password?: boolean
    search?: boolean
    type?: string
    label?: string
    touched?: boolean
    error?: boolean
    double?: boolean}> = (props) => {
  const [passwordType, setPasswordType] = useState(true);


    return (
    <InputContainer {...props} passwordType={passwordType}>

      <InputStyles
        {...props}
        disabled={props.disabled}
        type={passwordType && props.password ? "password" : `${props.type}`}
        placeholder={props.search && "Search..."}
      />
      {props.search || props.password ? (
        <img
          className={"inputIcon"}
          onClick={() => props.password && setPasswordType(!passwordType)}
          src={props.search ? search : passwordType ? noPas : pas}
          alt="search"
        />
      ) : (
        ""
      )}
    </InputContainer>
  );
};

export const CustomInputCheckBox: FC<any> = (props) => {
  return (
    <InputCheckBoxContainer {...props}>
      <label>
        <input disabled={props.disabled} type={"checkbox"} />
        <img src={forCheckBox} alt="forCheckbox" className={"checkImg"} />
      </label>
      <p>I accept the agreement</p>
    </InputCheckBoxContainer>
  );
};

const InputCheckBoxContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  color: #707070;
  font-size: 14px;
  grid-gap: 10px;

  label {
    position: relative;
  }
  input {
    display: none;
  }
  input:checked + .checkImg {
    background-color: #e4163a;
    border: 1px solid #e4163a;
  }
  input:disabled + .checkImg {
    color: #f6f6f6;
    cursor: default;
  }
  .checkImg {
    padding: 2px 1.5px;
    border-radius: 2px;
    border: 1px solid #707070;
    cursor: pointer;
  }
  .checkImg:hover {
    border: 1px solid #e4163a;
  }
  @media screen and ${deviceMax.md} {
    .checkImg:hover {
      border: 1px solid #707070;
    }
  }
`;

const InputContainer = styled.div<{
    passwordType: boolean
    label?: string
    double?: boolean
    error?: boolean
    touched?: boolean
    password?: boolean}>`
  margin-top: ${(props) => (props.label ? "8px;" : "0")};
  width: ${(props) => (props.double ? "100%;" : "364px;")};
  
  display: flex;
  flex-direction: column;
  position: relative;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input {
    border: ${(props) =>
      props.error && props.touched ? "1px solid #FF768E;" : ""};
  }

  .inputIcon {
    position: absolute;
    top: 14px;
    right: 12px;
    cursor: ${(props) => props.password && "pointer;"};
    transition: 0.5s;
  }
}

@media screen and ${deviceMax.xl} {
  width: 100%;
  
  
}
@media screen and ${deviceMax.md} {
  width: 100%;
}
`;
