import { combineReducers } from "redux";
import { CombineTypes } from "./types";
import counterSlice from "./reducers/counterSlice/counterSlice";
import tableSlice from "./reducers/tableSlice/tableSlice";
import booksSlice from "./reducers/booksSlice/booksSlice";

export const rootReducer = combineReducers({
  [CombineTypes.COUNTER]: counterSlice.reducer,
  [CombineTypes.TABLE]: tableSlice.reducer,
  [CombineTypes.BOOKS]: booksSlice.reducer,
});
