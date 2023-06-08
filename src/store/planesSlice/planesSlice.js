import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import planesService from "../services/planeService";
const initialState = {
  planes: null,
  isError: false,
  isLoading: false,
  message: "",
};
// асинхронная ф-я для получения данных с бека
export const getPlanes = createAsyncThunk("GET_PLANES", async (_, thunkAPI) => {
  try {
    return await planesService.getPlanes();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
const planesSlice = createSlice({
  name: "planesSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getPlanes.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPlanes.fulfilled, (state, action) => {
      state.isLoading = false;
      state.planes = action.payload;
    });
    builder.addCase(getPlanes.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.message = action.payload.message;
      state.planes = null;
    });
  },
});
export default planesSlice.reducer;
