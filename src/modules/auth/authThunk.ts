import { createAsyncThunk } from "@reduxjs/toolkit";
import {authorization} from "../../api/requests/authorization";
import {IAuth} from "./authTypes";
import {ILoginRequest, IRegisterRequest} from "../../api/dto/IAuthrization";

export const signInThunkCreator = createAsyncThunk<IAuth, ILoginRequest>(
  "auth/setSignIn",
  ({ login, password }) => {
      return authorization.login({ login, password });
  }
);

export const signUpThunkCreator = createAsyncThunk<IAuth, IRegisterRequest>(
  "auth/setSignUp",
  ({ userName, login, password }) => {
    return authorization.registered({ userName, login, password });
  }
);
