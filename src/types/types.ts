import { AxiosInstance } from "axios";
import { AppDispatch, RootState } from "../store/store";

export interface IStore {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}
