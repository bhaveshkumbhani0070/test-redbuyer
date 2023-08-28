import { configureStore } from "@reduxjs/toolkit";
import userDetailsSlice from "./userDetailsSlice";

const store = configureStore({
  reducer: {
    auth: userDetailsSlice
  },
});

export default store;