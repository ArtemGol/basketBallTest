import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {TypedUseSelectorHook, useSelector} from "react-redux"
import {SaveImageThunkCreator} from "./imageThunk";
import {ImageInitialStateInterface, RootImageStateInterface} from "./imageTypes";
import {CustomAlertFunction} from "../../utils/CustomAlertFunction";

const initialState: ImageInitialStateInterface = {
  error: null,
  imageUrl: ''
}


export const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    clearImageSource: (state) => {
      state.imageUrl = ''
    }
  },
  extraReducers: {
    [SaveImageThunkCreator.fulfilled.type]: (state, {payload}: PayloadAction<string>) => {
      state.imageUrl = payload
    },
    [SaveImageThunkCreator.rejected.type]: (state, action: any) => {
      CustomAlertFunction(
        action ? action.error?.message : 'Network Error',
        '',
        false,
        false
      )
    }
  }
})

export const {clearImageSource} = imageSlice.actions

export const useImageSelector: TypedUseSelectorHook<RootImageStateInterface> = useSelector