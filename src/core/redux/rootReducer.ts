import { getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { authSlice } from "../../modules/auth/authSlice";
import { teamSlice } from "../../modules/team/teamSlice";
import { imageSlice } from "../../modules/image/imageSlice";
import { playerSlice } from "../../modules/player/playerSlice";

export const rootReducer = {
  auth: authSlice.reducer,
  team: teamSlice.reducer,
  image: imageSlice.reducer,
  player: playerSlice.reducer,
};

export const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
  }),
  logger
];
