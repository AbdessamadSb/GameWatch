import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { popularGamesURL } from "../api";
const initialState = {
  popular: [],
  newGames: [],
  upcoming: [],
};
export const fetchGames = createAsyncThunk("games/fetchGames", async () => {
  const popularData = await axios.get(popularGamesURL());
  return popularData;
});

export const gamesSlicer = createSlice({
  name: "games",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchGames.fulfilled, (state, action) => {
      state.popular = action.payload.data.results;
    });
  },
});
export default gamesSlicer.reducer;
