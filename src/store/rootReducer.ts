import { combineReducers } from "redux";
import { CombineTypes } from "./types";
import counterSlice from "./reducers/counterSlice/counterSlice";
import tableSlice from "./reducers/tableSlice/counterSlice";

export const rootReducer = combineReducers({
  [CombineTypes.COUNTER]: counterSlice.reducer,
  [CombineTypes.TABLE]: tableSlice.reducer,
});
