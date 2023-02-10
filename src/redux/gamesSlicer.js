import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api";
const initialState = {
  popular: [],
  newGames: [],
  upcoming: [],
};
export const fetchGames = createAsyncThunk("games/fetchGames", async () => {
  const popularData = await axios.get(popularGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  const newData = await axios.get(newGamesURL());
  return [popularData, upcomingData, newData];
});
console.log(fetchGames());
export const gamesSlicer = createSlice({
  name: "games",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchGames.fulfilled, (state, action) => {
      state.popular = action.payload[0].data.results;
      state.upcoming = action.payload[1].data.results;
      state.newGames = action.payload[2].data.results;
    });
  },
});
export default gamesSlicer.reducer;
