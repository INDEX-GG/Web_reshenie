import { combineReducers } from "redux";
import { CombineTypes } from "./types";
import counterSlice from "./reducers/counterSlice/counterSlice";

export const rootReducer = combineReducers({
  [CombineTypes.COUNTER]: counterSlice.reducer,
});
