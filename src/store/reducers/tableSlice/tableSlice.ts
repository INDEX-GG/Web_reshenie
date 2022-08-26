import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getDataThunk } from "./tableSliceAPI/tableSliceAPI";
import { IdataItem } from "types/types";

interface IInitialState {
  data: {
    result: IdataItem[];
    delivery_cost: number | null;
    adjustment_cost: number | null;
    manual_delivery_cost: number | null;
  };
  isLoading: boolean;
  error: string;
}

const initialState: IInitialState = {
  data: {
    result: [],
    delivery_cost: null,
    adjustment_cost: null,
    manual_delivery_cost: null,
  },
  isLoading: false,
  error: "",
};

const tableSlice = createSlice({
  name: "tableSlice",
  initialState,
  reducers: {
    setNewData(state, action: PayloadAction<IdataItem[]>) {
      state.data.result = action.payload;
    },
  },
  extraReducers: {
    [getDataThunk.fulfilled.type](state, action) {
      state.data = action.payload;
      state.isLoading = false;
      console.log("fulfilled");
    },
    [getDataThunk.pending.type](state) {
      state.isLoading = true;
      console.log("pending");
    },
    [getDataThunk.rejected.type](state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
      console.log("rejected");
    },
  },
});
export const { setNewData } = tableSlice.actions;
export default tableSlice;
