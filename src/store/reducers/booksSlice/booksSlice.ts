import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  marketplace: string;
  stock_days: string;
  stock: string;
  remainder: FileList[];
  marketplace_stock: string;
}

const initialState: IInitialState = {
  marketplace: "yandex",
  stock_days: "",
  stock: "",
  remainder: [],
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
    pushRemainder(state, action) {
      state.remainder = action.payload;
    },
  },
  extraReducers: {},
});
export const {
  pushDataMarketplace,
  pushDataStockDays,
  pushDataStock,
  pushRemainder,
} = booksSlice.actions;

export default booksSlice;
