import React, {FC} from "react";
import Select from "react-select";
import {customStyles} from "../../ui/SelectS";
import styled from "styled-components";
import {deviceMax, theme} from "../../assets/constants/primitives";

interface IProps {
    disabled?: boolean
    onChange?: (values: any) => void
    options?: { value: string | number, label: string }[]
    touched?: boolean
    error?: string
    defaultValue?: { value?: string | number, label?: string }
    isMulti?: boolean
    value?: any
}

export const CustomSelect: FC<IProps> = (props) => {
    return (
            <SelectS touched={props.touched}
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
    );
};

const SelectS = styled.div<{
    touched?: boolean
    error?: string
}>`
  & > * {
    height: inherit;
    min-width: inherit;
  }
  min-width: 40%;
  box-sizing: content-box;
  width: 364px;
  height: max-content;
  align-items: center;
  border: ${(props) =>
          props?.error ? `1px solid ${theme.lightestRed}` : ""};
  border-radius: 4px;
  @media screen and ${deviceMax.xl} {
    width: 100%;
    height: 40px;
  };
`;
