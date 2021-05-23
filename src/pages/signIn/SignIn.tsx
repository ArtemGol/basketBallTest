import React, {useState} from "react";
import {SignLayout} from "../../component/forSign/SignLayout";
import {CustomButton} from "../../component/ui/CustomButton";
import {signInThunkCreator} from "../../modules/auth/authThunk";
import {useAuthSelector} from "../../modules/auth/authSlice";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {InputLayout} from "../../component/ui/InputLayout";
import {theme} from "../../assets/constants/primitives";
import {signInFormContent, signInSchema} from "../../utils/formsControl";
import {InputS} from "../../ui/InputS";

export const SignIn = () => {
  const dispatch = useDispatch();
  const {isFetching} = useAuthSelector(state => state.auth);

  const onSubmit = ({login, password}: { login: string, password: string }) => {
    dispatch(signInThunkCreator({login, password}))
  };

  const {handleSubmit, register, formState: {errors}} = useForm({
    resolver: yupResolver(signInSchema)
  })
  const [passwordType, setPasswordType] = useState(true);

  const signInFormFields = signInFormContent.inputs.map((input, key) => {
    const error = Object.keys(errors).find(key => key === input.name)
    return (
      <div key={key}>
        <Label>{input.label}</Label>
        {input.type === 'password'
          ? <InputLayout passwordType={passwordType}
                         setPasswordType={setPasswordType}>
            <InputS type={input.type === 'password' && passwordType ? 'password' : ''}
                    {...register(input.name)}
                    error={error}
                    map/>
          </InputLayout>
          : <InputS {...register(input.name)}
                    error={error}
                    map/>
        }
        {error && <ErrorStyles>Required</ErrorStyles>}
      </div>
    )
  })

  return (
    <SignLayout signIn>
      <SignFormStyles onSubmit={handleSubmit(onSubmit)}>
        {signInFormFields}
        <CustomButton disabled={isFetching}>Sign In</CustomButton>
      </SignFormStyles>
    </SignLayout>
  );
};

export const SignFormStyles = styled.form`
  display: flex;
  flex-direction: column;
  grid-gap: 24px;
  margin-top: 32px;
  margin-bottom: 24px;
`;

export const ErrorStyles = styled.span`
  margin-top: 2px;
  font-size: 12px;
  color: ${theme.lightestRed};
`;

export const Label = styled.label`
  color: ${theme.grey};
  font-size: 14px;
  margin-bottom: 8px;
`;
