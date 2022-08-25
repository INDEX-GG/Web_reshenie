import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getDataThunk } from "./tableSliceAPI/tableSliceAPI";
import { IdataItem } from "types/types";

interface IInitialState {
  data: {
    result: IdataItem[];
  };
  isLoading: boolean;
  error: string;
}

const initialState: IInitialState = {
  data: {
    result: [],
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
    },
    [getDataThunk.pending.type](state) {
      state.isLoading = true;
    },
    [getDataThunk.rejected.type](state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});
export const { setNewData } = tableSlice.actions;
export default tableSlice;
