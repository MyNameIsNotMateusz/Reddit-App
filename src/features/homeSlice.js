import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadHomeData = createAsyncThunk(
 "home/loadHomeData",
 async () => {
  const data = await fetch('https://www.reddit.com/r/popular.json');
  const json = await data.json();
  return json.data.children;
 }
)

export const homeSlice = createSlice({
 name: "home",
 initialState: {
  homeData: [],
  isLoading: false,
  isError: false,
 },
 extraReducers: (builder) => {
  builder
   .addCase(loadHomeData.pending, (state) => {
    state.isLoading = true;
    state.isError = false;
   })
   .addCase(loadHomeData.fulfilled, (state, action) => {
    state.isLoading = false;
    state.isError = false;
    state.homeData = action.payload;
   })
   .addCase(loadHomeData.rejected, (state) => {
    state.isLoading = false;
    state.isError = true;
    state.homeData = [];
   })
 }
})

export default homeSlice.reducer;

export const selectHome = state => state.home.homeData;

