import { configureStore } from "@reduxjs/toolkit";
import planesSlice from "./planesSlice/planesSlice";
import planeSlice from "./planeSlice/planeSlice";
const store = configureStore({
  reducer: { planesSlice, planeSlice },
});
export default store;
