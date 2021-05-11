import React, {FC} from "react";
import Select from "react-select";
import {customStyles} from "../../ui/SelectS";
import styled from "styled-components";
import {deviceMax, theme} from "../../assets/constants/primitives";
import {Label} from "../common/forms/CustomField";

interface IProps {
    disabled?: boolean
    label?: string
    onChange?: (values: any) => void
    options?: { value: string | number, label: string }[]
    touched?: boolean
    error?: string
    defaultValue?: { value?: string | number, label?: string }
    isMulti?: boolean
}

export const CustomSelect: FC<IProps> = (props) => {
    return (
        <>
            {props.label &&
                <Label>{props.label}</Label>
            }
            <SelectS label={props.label}
                     touched={props.touched}
                     error={props.error}>
                <Select
                    isDisabled={props.disabled}
                    onChange={props.onChange}
                    isCleareble={true}
                    placeholder={"Select..."}
                    closeMenuOnSelect={!props.isMulti}
                    blurInputOnSelect={!props.isMulti}
                    isMulti={props.isMulti}
                    options={props.options}
                    defaultValue={props.defaultValue}
                    styles={customStyles}
                />
            </SelectS>
        </>
    );
};

const SelectS = styled.div<{
    label?: string
    touched?: boolean
    error?: string
}>`
  & > * {
    height: inherit;
    min-width: inherit;
  }

  margin-top: ${(props) => (props.label ? "8px;" : "")};
  min-width: 40%;
  box-sizing: content-box;
  width: 364px;
  height: max-content;
  align-items: center;
  border: ${(props) =>
          props.error && props.touched ? `1px solid ${theme.lightestRed}` : ""};
  border-radius: 4px;
  @media screen and ${deviceMax.xl} {
    width: 100%;
    height: 40px;
  };
`;
