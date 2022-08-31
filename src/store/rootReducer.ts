import { combineReducers } from "redux";
import { CombineTypes } from "./types";
import tableSlice from "./reducers/tableSlice/tableSlice";

export const rootReducer = combineReducers({
  [CombineTypes.TABLE]: tableSlice.reducer,
});
