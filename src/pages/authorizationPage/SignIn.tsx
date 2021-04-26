import React from "react";
import {SignFormStyles} from "../../styles/FormStyles/FormStyles";
import {CustomField} from "../helpers/forms/CustomField";
import {Form} from "react-final-form";
import {SignLayout} from "./SignLayout";
import {CustomButton} from "../../ui/CustomButton";
import {signInThunkCreator} from "../../modules/auth/authThunk";
import {useAuthSelector} from "../../modules/auth/authSlice";
import {useAppDispatch} from "../../core/redux/store";


export const SignIn = () => {

  const dispatch: any = useAppDispatch();
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
