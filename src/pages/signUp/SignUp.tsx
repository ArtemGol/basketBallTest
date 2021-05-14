import React, {useState} from "react";
import {CustomButton} from "../../component/ui/CustomButton";
import {SignLayout} from "../../component/forSign/SignLayout";
import {signUpThunkCreator} from "../../modules/auth/authThunk";
import {useAuthSelector} from "../../modules/auth/authSlice";
import {ErrorStyles, Label, SignFormStyles} from "../signIn/SignIn";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {InputLayout, CustomInputCheckBox} from "../../component/ui/InputLayout";
import {signUpFormContent, signUpSchema} from "../../utils/formsControl";
import {InputS} from "../../ui/InputS";

export const SignUp = () => {
    const dispatch = useDispatch();
    const {isFetching} = useAuthSelector(state => state.auth);

    const onSubmit = ({password, userName, login}: { password: string, userName: string, login: string }) => {
        dispatch(signUpThunkCreator({password, userName, login}));
    };

    const {handleSubmit, register, formState: {errors}} = useForm({
        resolver: yupResolver(signUpSchema)
    })
    const [passwordType, setPasswordType] = useState(true);
    return (
        <SignLayout>
            <SignFormStyles onSubmit={handleSubmit(onSubmit)}>
                {signUpFormContent.inputs.map((input, key) => {
                    const error = Object.keys(errors).find(key => key === input.name)
                    return (
                        <div key={key}>
                            <Label>{input.label}</Label>
                            {input.type !== 'checkbox'
                                ? input.type === 'password'
                                        ? <InputLayout passwordType={passwordType}
                                                       setPasswordType={setPasswordType}>
                                            <InputS type={passwordType ? 'password' : ''}
                                                    {...register(input.name)}
                                                    error={error}
                                                    map/>
                                        </InputLayout>
                                        : <InputS {...register(input.name)}
                                                  error={error}
                                                  map/>

                                : <CustomInputCheckBox register={register(input.name)}/>
                            }
                            {error &&
                            <ErrorStyles>{input?.type !== 'checkbox'
                                ? input.name === 'repeatPassword' && errors?.repeatPassword?.type === 'oneOf'
                                    ? errors?.repeatPassword?.message
                                    : 'Required'
                                : 'You must be accept the agreement'}</ErrorStyles>
                            }
                        </div>
                    )
                })}
                <CustomButton disabled={isFetching}>Sign Up</CustomButton>
            </SignFormStyles>
        </SignLayout>
    );
};
