import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import { CombineTypes } from "store/types";

interface IInitialState {
  counter: number;
}

const initialState: IInitialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.counter += action.payload;
    },
    decrement(state, action: PayloadAction<number>) {
      state.counter = action.payload;
    },
  },
});

const selectCounterSlice = (state: RootState) => state[CombineTypes.COUNTER];
export const selectCounter = (state: RootState) => selectCounterSlice(state);

export const { increment, decrement } = counterSlice.actions;
export default counterSlice;
