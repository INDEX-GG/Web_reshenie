import { AxiosInstance } from "axios";
import { AppDispatch, RootState } from "../store/store";

export interface IStore {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}

export interface IdataItem {
  vendor_code: string;
  delivery_type: string;
  product_type: string;
  title: string;
  barcode: string;
  march: string;
  april: string;
  may: string;
  june: string;
  july: string;
  august: string;
  abc_segment: string;
  sales_month: string;
  current_sales_fbo: string;
  current_sales_fbs: string;
  samara: string;
  remainder_mckc: string;
  remainder_rc: string;
  ads: string;
  current_idc: string;
  delivery_cost: string;
  adjustment_cost: string;
  manual_delivery_cost: string;
  shop_price: string;
  сomments: string;
}
