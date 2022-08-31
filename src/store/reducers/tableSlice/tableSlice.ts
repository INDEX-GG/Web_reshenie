import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getDataThunk, postBooksThunk } from "./tableSliceAPI/tableSliceAPI";
import { IdataItem } from "types/types";

interface IDataTable {
  adjustment_cost: null;
  delivery_cost: null;
  manual_delivery_cost: null;
  months: [];
  result: [];
}
interface IDataTableWaiting {
  marketplace: string;
  status: string;
}

interface IInitialState {
  data: {
    result: IDataTableWaiting;
    delivery_cost: number | null;
    adjustment_cost: number | null;
    manual_delivery_cost: number | null;
    months: number[];
  };
  resultCode: string;
  isLoading: boolean;
  error: string;
}

const initialState: IInitialState = {
  data: {
    result: {
      marketplace: "",
      status: "",
    },
    delivery_cost: null,
    adjustment_cost: null,
    manual_delivery_cost: null,
    months: [],
  },
  resultCode: "",
  isLoading: false,
  error: "",
};

const tableSlice = createSlice({
  name: "tableSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getDataThunk.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.data = action.payload;
        state.isLoading = false;
      },
    );
    builder.addCase(
      postBooksThunk.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.resultCode = action.payload;
      },
    );
  },
});
export default tableSlice;
