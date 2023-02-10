import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "../redux/gamesSlicer";
export const store = configureStore({
  reducer: {
    games: gameReducer,
  },

});
