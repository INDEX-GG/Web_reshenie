import { AxiosInstance } from "axios";
import { AppDispatch, RootState } from "../store/store";

export interface IStore {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}

export interface IdataItem {
  "3": number;
  "4": number;
  "5": number;
  "6": number;
  "7": number;
  "8": number;
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
}
