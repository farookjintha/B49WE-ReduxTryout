import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

// Slice = reducers + actions

const counterSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      console.log("Incrementing...");
      state.count = state.count + 1;
    },
    decrement: (state) => {
      console.log("Decrementing...");

      state.count = state.count - 1;
    },
    reset: (state) => {
      console.log("Resetting...");

      state.count = 0;
    },
  },
});

export default counterSlice.reducer;

export const { increment, decrement, reset } = counterSlice.actions;

// CREATING SLICE

// use createSlice from '@reduxjs/toolkit'

// createSlice({name, initialState, reducers})

// give a name to the slice
// give an initialState
// give all handlers function (reducer)
