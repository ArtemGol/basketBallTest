import { createAsyncThunk } from "@reduxjs/toolkit";
import {authorization} from "../../api/requests/authorization";

export const signInThunkCreator = createAsyncThunk<string, {
    login: string
    password: string
}>(
  "auth/setSignIn",
  ({ login, password }) => {
      return authorization.login({ login, password });
  }
);

export const signUpThunkCreator = createAsyncThunk<string, {
    userName: string
    login: string
    password: string
}>(
  "auth/setSignUp",
  ({ userName, login, password }) => {
    return authorization.registered({ userName, login, password });
  }
);
