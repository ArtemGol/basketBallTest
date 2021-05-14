import React, {FC} from "react";
import styled from "styled-components";
import {deviceMax, theme} from "../../assets/constants/primitives";
import pas from "../../assets/icon/pas.png";
import noPas from "../../assets/icon/nopas.png";
import search from '../../assets/icon/search.png';
import forCheckBox from "../../assets/icon/forCheckbox.png";

interface IProps {
    search?: boolean
    setPasswordType?: (passwordType: boolean) => void
    passwordType?: boolean
}

export const InputLayout: FC<IProps> = (props) => {
    const ChangeIcon = () => {
        props.setPasswordType && props.setPasswordType(!props.passwordType)
    }
    return (
        <InputContainer {...props} passwordType={props.passwordType}>
            {props.children}
            {props.passwordType
                ? <img
                    className={"inputIcon"}
                    onClick={ChangeIcon}
                    src={noPas}
                    alt="noPas"
                />
                : props.search
                    ? <img className={"inputIcon"}
                           src={search}
                           alt="search"/>
                    : <img className={"inputIcon"}
                           onClick={ChangeIcon}
                           src={pas}
                           alt="pas"
                    />
            }
        </InputContainer>
    );
};

export const CustomInputCheckBox: FC<any> = (props) => (
    <InputCheckBoxContainer {...props}>
        <label>
            <input {...props.register} disabled={props.disabled} type={"checkbox"}/>
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
    passwordType?: boolean
    label?: string
    error?: string
    search?: boolean
}>`
  width: ${props => props.search ? '364px' : '100%'};

  display: flex;
  flex-direction: column;
  position: relative;
  
  .inputIcon {
    position: absolute;
    top: ${props => props.search ? '15px' : '22px'};
    right: 12px;
    cursor: ${(props) => !props.search && "pointer;"};
    transition: 0.5s;
  }
}

@media screen and ${deviceMax.xl} {
  width: 100%;
}
`