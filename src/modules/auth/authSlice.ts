import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import { signInThunkCreator, signUpThunkCreator } from "./authThunk";
import { GlobalForAuth } from "./globalforauth";
import {CustomAlertFunction} from "../../utils/CustomAlertFunction";
import {AuthInitialStateInterface, AuthInterFace, RootAuthStateInterface} from "./authTypes";

const initialState: AuthInitialStateInterface = {
  error: null,
  isFetching: false,
  isAuth: localStorage.isAuth || false,
  name: localStorage.name || null,
  avatarUrl: localStorage.avatarUrl || null,
  token: localStorage.token || null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuth = false;
      state.name = "";
      state.avatarUrl = "";

      localStorage.clear();
    }
  },
  extraReducers: {
    [signInThunkCreator.pending.type]: (state) => {
      state.isFetching = true;
    },
    [signInThunkCreator.fulfilled.type]: (state, { payload }: PayloadAction<AuthInterFace>) => {
      GlobalForAuth(state, payload);
      state.isFetching = false;
    },
    [signInThunkCreator.rejected.type]: (state, action: any) => {
      CustomAlertFunction(
        action ? action.error?.message : 'Network Error',
        '',
        true,
        false
      )
      state.isFetching = false

    },
    [signUpThunkCreator.pending.type]: (state) => {
      state.isFetching = true
    },
    [signUpThunkCreator.fulfilled.type]: (state, { payload }: PayloadAction<AuthInterFace>) => {
      GlobalForAuth(state, payload);
      state.isFetching = false
    },
    [signUpThunkCreator.rejected.type]: (state, action: any) => {
      CustomAlertFunction(
        action ? action.error?.message : 'Network Error',
        '',
        true,
        false
      )
      state.isFetching = false
    },
  },
});

export const { logout } = authSlice.actions;

export const useAuthSelector: TypedUseSelectorHook<RootAuthStateInterface> = useSelector;
