import { configureStore } from "@reduxjs/toolkit";
import planesSlice from "./planesSlice/planesSlice";
const store = configureStore({
  reducer: { planesSlice },
});
export default store;
