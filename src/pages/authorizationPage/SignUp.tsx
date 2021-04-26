import React from "react";
import { Form } from "react-final-form";
import { SignFormStyles } from "../../styles/FormStyles/FormStyles";
import { CustomField } from "../helpers/forms/CustomField";
import { CustomButton } from "../../ui/CustomButton";
import { SignLayout } from "./SignLayout";
import { signUpThunkCreator } from "../../modules/auth/authThunk";
import { useAuthSelector } from "../../modules/auth/authSlice";
import {useAppDispatch} from "../../core/redux/store";

interface FormValueInterFace {
    userName: string
    login: string
    password: string
    repeatPassword: string
    check: boolean
}

export const SignUp = () => {
  const dispatch: any = useAppDispatch();
  const { isFetching } = useAuthSelector(state => state.auth);

  const onSubmit = ({ password, userName, login }: {password: string, userName: string, login: string}) => {
    dispatch(signUpThunkCreator({ password, userName, login }));
  };

    return (
    <SignLayout>
      <Form
        onSubmit={onSubmit}
        validate={(values: FormValueInterFace) => {
          const errors: any = {};
          if (values.password !== values.repeatPassword) {
            errors.repeatPassword = "The password is repeated incorrect";
          }
          return errors;
        }}
        render={({ handleSubmit }) => (
          <SignFormStyles onSubmit={handleSubmit} id={"SignUpUser"}>
            <CustomField name={"userName"} label={"Name"} />
            <CustomField name={"login"} label={"Login"} />
            <CustomField password name={"password"} label={"Password"} />
            <CustomField
              password
              name={"repeatPassword"}
              label={"Enter your password again"}
            />
            <CustomField type={"checkbox"} name={"check"} />
            <div>
              <CustomButton disabled={isFetching}>Sign Up</CustomButton>
            </div>
          </SignFormStyles>
        )}
      />
    </SignLayout>
  );
};
