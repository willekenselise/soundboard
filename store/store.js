import { configureStore } from "@reduxjs/toolkit";
import samplerReducer from "./reducer";

export default configureStore({
  reducer: {
    sampler: samplerReducer
  },
});
