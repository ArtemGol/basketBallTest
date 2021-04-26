import React, {FC} from "react";
import { CustomInput, CustomInputCheckBox } from "../../../ui/CustomInput";
import { Field } from "react-final-form";
import {
  composeValidators,
  maxLengthCreator,
  required1,
  required2,
} from "./validarors";
import styled from "styled-components";
import { CustomSelect } from "../../../ui/CustomSelect";

const maxLength1000 = maxLengthCreator(1000);

export const CustomField: FC<{
  name: string
  label?: string
  password?: boolean
  type?: string
  disabled?: boolean
  double?: boolean }> = ({
  name,
  label,
  password,
  type,
  disabled,
  double
}) => {
  return (
    <Field
      name={name}
      type={type}
      validate={composeValidators(
        type !== "checkbox" ? required1 : required2,
        maxLength1000
      )}
    >
      {({ input, meta }) =>
        type !== "checkbox" ? (
          <div>
            <Label>{label}</Label>
            <CustomInput
              {...input}
              type={type}
              disabled={disabled}
              password={password}
              label={label}
              touched={meta.touched}
              error={meta.error}
              double={double}
            />
            {meta.error && meta.touched && (
              <ErrorStyles>{meta.error}</ErrorStyles>
            )}
          </div>
        ) : (
          <div>
            <CustomInputCheckBox {...input} />
            {meta.error && meta.touched && (
              <ErrorStyles>{meta.error}</ErrorStyles>
            )}
          </div>
        )
      }
    </Field>
  );
};

export const CustomSelectField: FC<{
  name: string
  label?: string
  options?: {value?: string | number, label?: string}[]
  defaultValue: {value?: string | number, label?: string},
  disabled?: boolean,
}> = ({
  name,
  label,
  options,
  defaultValue,
  disabled,
}) => {
  return (
    <Field name={name} validate={required1}>
      {({ input, meta }) => (
        <div>
          <Label>{label}</Label>
          <CustomSelect
            label={label}
            disabled={disabled}
            options={options}
            touched={meta.touched}
            error={meta.error}
            defaultValue={defaultValue}
            {...input}
          />
          {meta.error && meta.touched && (
            <ErrorStyles>{meta.error}</ErrorStyles>
          )}
        </div>
      )}
    </Field>
  );
};

export const ErrorStyles = styled.span`
  font-size: 12px;
  color: #ff768e;
`;

const Label = styled.label`
  color: #707070;
  font-size: 14px;
  margin-bottom: 8px;
`;
