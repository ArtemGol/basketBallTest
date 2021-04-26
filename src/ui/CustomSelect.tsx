import React, {FC} from "react";
import Select from "react-select";
import { customStyles } from "../styles/uiStyles/SelectStyles";
import styled from "styled-components";
import { deviceMax } from "../styles/Primitives";

export const CustomSelect: FC<{
    disabled?: boolean
    label?: string
    onChange: (values: any) => void
    options?: {value?: string | number, label?: string}[]
    touched?: boolean
    error?: string
    defaultValue?: {value?: string | number, label?: string}
    isMulti?: boolean}> = (props) => {

    return (
        // @ts-ignore
    <SelectS {...props}>
      <Select
        isDisabled={props.disabled}
        onChange={props.onChange}
        isCleareble={true}
          // @ts-ignore
        formatGroupLabel={true}
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
    label?: string
    touched?: boolean
    error?: string }>`
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
    props.error && props.touched ? "1px solid #FF768E;" : ""};
  border-radius: 4px;
  @media screen and ${deviceMax.xl} {
    width: 100%;
    height: 40px;
  } ;
`;
