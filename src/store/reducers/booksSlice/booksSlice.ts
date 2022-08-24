import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  data: { marketplace: string; stock_days: number; stock: string; table: any };
}

const initialState: IInitialState = {
  data: { marketplace: "yandex", stock_days: 0, stock: "", table: "" },
};

const booksSlice = createSlice({
  name: "booksSlice",
  initialState,
  reducers: {
    pushDataMarketplace(state, action: PayloadAction<string>) {
      state.data.marketplace = action.payload;
    },
    pushDataStockDays(state, action: PayloadAction<number>) {
      state.data.stock_days = action.payload;
    },
    pushDataStock(state, action: PayloadAction<string>) {
      state.data.stock = action.payload;
    },
    pushDataTable(state, action: PayloadAction<any>) {
      state.data.table = action.payload;
    },
  },
  extraReducers: {},
});
export const {
  pushDataMarketplace,
  pushDataStockDays,
  pushDataStock,
  pushDataTable,
} = booksSlice.actions;

export default booksSlice;
