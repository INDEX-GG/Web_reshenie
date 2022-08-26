import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  marketplace: string;
  stock_days: string;
  stock: string;
  // table: any;
  marketplace_stock: string;
}

const initialState: IInitialState = {
  marketplace: "yandex",
  stock_days: "",
  stock: "",
  // table: "",
  marketplace_stock: "samara",
};

const booksSlice = createSlice({
  name: "booksSlice",
  initialState,
  reducers: {
    pushDataMarketplace(state, action: PayloadAction<string>) {
      state.marketplace = action.payload;
    },
    pushDataStockDays(state, action: PayloadAction<string>) {
      state.stock_days = action.payload;
    },
    pushDataStock(state, action: PayloadAction<string>) {
      state.stock = action.payload;
    },
    // pushDataTable(state, action: PayloadAction<any>) {
    //   state.table = action.payload;
    // },
  },
  extraReducers: {},
});
export const {
  pushDataMarketplace,
  pushDataStockDays,
  pushDataStock,
  // pushDataTable,
} = booksSlice.actions;

export default booksSlice;
