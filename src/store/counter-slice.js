import { createSlice } from "@reduxjs/toolkit";

const INITIAL_COUNTER_STATE = {
  counter: 0,
  showCounter: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: INITIAL_COUNTER_STATE,
  reducers: {
    increment(state) {
      state.counter++;
    },

    decrement(state) {
      state.counter--;
    },

    increaseBy(state, action) {
      state.counter = state.counter + action.payload.value;
    },

    toggleShowControls(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice;
