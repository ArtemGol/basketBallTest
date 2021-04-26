import {configureStore} from "@reduxjs/toolkit";
import {middleware, rootReducer} from "./rootReducer";
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer: rootReducer,
    middleware,
});

export type AppDispatchType = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatchType>();