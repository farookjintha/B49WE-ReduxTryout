import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";

const rtkStore = configureStore({
  reducer: {
    count: counterReducer,
  },
});

export default rtkStore;
