import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getDataThunk } from "./tableSliceAPI/tableSliceAPI";

export interface dataItem {
  vendor_code: string;
  delivery_type: string;
  product_type: string;
  title: string;
  barcode: string;
  march: string;
  april: string;
  may: string;
  june: string;
  july: string;
  august: string;
  abc_segment: string;
  sales_month: string;
  current_sales_fbo: string;
  current_sales_fbs: string;
  samara: string;
  remainder_mckc: string;
  remainder_rc: string;
  ads: string;
  current_idc: string;
  delivery_cost: string;
  adjustment_cost: string;
  manual_delivery_cost: string;
  shop_price: string;
  сomments: string;
}

interface IInitialState {
  data: {
    result: dataItem[];
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
    setNewData(state, action: PayloadAction<dataItem[]>) {
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
