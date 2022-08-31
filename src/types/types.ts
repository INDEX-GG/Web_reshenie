import { AxiosInstance } from "axios";
import { AppDispatch, RootState } from "../store/store";

export interface IStore {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}
export interface IMonths {
  1?: number;
  2?: number;
  3?: number;
  4?: number;
  5?: number;
  6?: number;
  7?: number;
  8?: number;
  9?: number;
  10?: number;
  11?: number;
  12?: number;
}

export interface IdataItem {
  "0": number;
  "1": number;
  "2": number;
  "3": number;
  "4": number;
  "5": number;
  vendor_code: string;
  delivery_type: string;
  product_type: string;
  name: string;
  barcode: string;
  abc_segment: string;
  fbo: number;
  fbs: number;
  sold_this_month: number;
  stock: number;
  msks: number;
  rc: number;
  ads: number;
  ids: number;
  smart_order_auto: number;
  smart_order_correct: number;
  manual_delivery: number;
  price: string;
  comment: string;
  status?: string;
}

export interface WaitCalculateData {
  result: {
    // ...more
    status: "waiting";
  };
}
