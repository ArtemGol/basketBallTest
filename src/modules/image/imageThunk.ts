import { createAsyncThunk } from "@reduxjs/toolkit";
import { image } from "../../api/requests/image";

export const SaveImageThunkCreator = createAsyncThunk<string, string | FormData>(
  "image/setImage",
  (formData) => {
    return image.save(formData);
  }
);
