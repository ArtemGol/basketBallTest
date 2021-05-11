import React from "react";
import {CustomField} from "../../component/common/forms/CustomField";
import {Form} from "react-final-form";
import {SignLayout} from "../../component/forSign/SignLayout";
import {CustomButton} from "../../component/ui/CustomButton";
import {signInThunkCreator} from "../../modules/auth/authThunk";
import {useAuthSelector} from "../../modules/auth/authSlice";
import styled from "styled-components";
import {useDispatch} from "react-redux";


export const SignIn = () => {

  const dispatch = useDispatch();
  const {isFetching} = useAuthSelector(state => state.auth);

  const onSubmit = ({login, password}: {login: string, password: string}) => {
    dispatch(signInThunkCreator({login, password}))
  };

    return (
    <SignLayout signIn>
      <Form
        onSubmit={onSubmit}
        render={({handleSubmit}) => (
          <SignFormStyles onSubmit={handleSubmit} id={"SignIn"}>
            <CustomField name={"login"} label={"Login"}/>
            <CustomField password name={"password"} label={"Password"}/>
            <div>
              <CustomButton disabled={isFetching}>Sign In</CustomButton>
            </div>
          </SignFormStyles>
        )}
      />
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
