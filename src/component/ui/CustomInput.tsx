import React, {ChangeEvent, FC, useState} from "react";
import {InputS} from "../../ui/InputS";
import search from "../../assets/icon/search.png";
import styled from "styled-components";
import {deviceMax, theme} from "../../assets/constants/primitives";
import pas from "../../assets/icon/pas.png";
import noPas from "../../assets/icon/nopas.png";
import forCheckBox from "../../assets/icon/forCheckbox.png";
import {Label} from "../common/forms/CustomField";

interface IProps {
    name?: string
    ref?: any
    value?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    disabled?: boolean
    password?: boolean
    search?: boolean
    type?: string
    label?: string
    touched?: boolean
    error?: boolean
    double?: boolean
}

export const CustomInput: FC<IProps> = (props) => {
    const [passwordType, setPasswordType] = useState(true);
    return (
        <div>
            {props.label &&
                <Label>{props.label}</Label>
            }
            <InputContainer {...props} passwordType={passwordType}>
                <InputS
                    {...props}
                    ref={props.ref}
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
        </div>
    );
};

export const CustomInputCheckBox: FC<any> = (props) => (
        <InputCheckBoxContainer {...props}>
            <label>
                <input disabled={props.disabled} type={"checkbox"}/>
                <img src={forCheckBox} alt="forCheckbox" className={"checkImg"}/>
            </label>
            <p>I accept the agreement</p>
        </InputCheckBoxContainer>
    )

const InputCheckBoxContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  color: ${theme.grey};
  font-size: 14px;
  grid-gap: 10px;

  label {
    position: relative;
  }

  input {
    display: none;
  }

  input:checked + .checkImg {
    background-color: ${theme.red};
    border: 1px solid ${theme.red};
  }

  input:disabled + .checkImg {
    color: ${theme.lightestGrey1};
    cursor: default;
  }

  .checkImg {
    padding: 2px 1.5px;
    border-radius: 2px;
    border: 1px solid ${theme.grey};
    cursor: pointer;
  }

  .checkImg:hover {
    border: 1px solid ${theme.red};
  }

  @media screen and ${deviceMax.md} {
    .checkImg:hover {
      border: 1px solid ${theme.grey};
    }
  }
`;

const InputContainer = styled.div<{
    passwordType: boolean
    label?: string
    double?: boolean
    error?: boolean
    touched?: boolean
    password?: boolean
}>`
  margin-top: ${(props) => (props.label ? "8px;" : "0")};
  width: ${(props) => (props.double ? "100%;" : "364px;")};

  display: flex;
  flex-direction: column;
  position: relative;

  input {
    border: ${(props) =>
            props.error && props.touched ? `1px solid ${theme.lightestRed}` : ""};
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
`
