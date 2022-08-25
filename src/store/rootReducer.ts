import { combineReducers } from "redux";
import { CombineTypes } from "./types";
import tableSlice from "./reducers/tableSlice/tableSlice";
import booksSlice from "./reducers/booksSlice/booksSlice";

export const rootReducer = combineReducers({
  [CombineTypes.TABLE]: tableSlice.reducer,
  [CombineTypes.BOOKS]: booksSlice.reducer,
});
