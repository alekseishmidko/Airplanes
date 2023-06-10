import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import planesService from "../services/planeService";
const initialState = {
  plane: null,
  isError: false,
  isLoading: false,
  message: "",
  errors: null,
};
// асинхронная ф-я для получения данных с бека
export const getPlane = createAsyncThunk("GET_PLANE", async (id, thunkAPI) => {
  try {
    return await planesService.getPlane(id);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
export const createPlane = createAsyncThunk(
  "CREATE_PLANE",
  async (planeData, thunkAPI) => {
    try {
      return await planesService.createPlane(planeData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
const planeSlice = createSlice({
  name: "planeSlice",
  initialState,
  reducers: {
    resetPlaneErrors: (state) => {
      state.errors = null;
    },
  },
  extraReducers: (builder) => {
    // getPlane
    builder.addCase(getPlane.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPlane.fulfilled, (state, action) => {
      state.isLoading = false;
      //   придет массив , чтобы сразу преобразовать его в объект , ставлю [0] , тк там и так один Товар приходит с бека
      state.plane = action.payload[0];
    });
    builder.addCase(getPlane.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.message = action.payload.message;
      state.plane = null;
    });
    //
    // CreatePlane
    builder.addCase(createPlane.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
    });
    builder.addCase(createPlane.fulfilled, (state, action) => {
      state.isLoading = false;
      state.errors = null;
    });
    builder.addCase(createPlane.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;

      state.errors = action.payload;
    });
  },
});
export const { resetPlaneErrors } = planeSlice.actions;
export default planeSlice.reducer;
