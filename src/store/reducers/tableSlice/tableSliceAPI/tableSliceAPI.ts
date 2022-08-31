import { IStore, WaitCalculateData } from "./../../../../types/types";
import { webReshenieAxios } from "./../../../../lib/http/index";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IdataItem } from "types/types";
import { IPostData } from "components/Header/Header";

export const getDataThunk = createAsyncThunk(
  "tableSlice/getData",
  async ({ resultCode }: any, { dispatch, rejectWithValue }) => {
    try {
      const response = await webReshenieAxios.get<
        IdataItem[] | WaitCalculateData
      >(`/api/table/upload/?code=${resultCode}&page=1`);
      if ("result" in response.data) {
        if (response.data.result.status === "waiting") {
          dispatch(getDataThunk({ resultCode }));
          return {};
        }
      }

      return response.data;
    } catch (error) {
      return rejectWithValue("code does not exist, code not specified");
    }
  },
);

export const postBooksThunk = createAsyncThunk<
  void | string,
  IPostData,
  IStore
>("tableSlice/postBooksThunk", async (data, { dispatch }) => {
  try {
    if (
      data.marketplace &&
      data.stock_days &&
      data.our_stock &&
      data.marketplace_stock &&
      data.products_table &&
      data.stock_table
    ) {
      const formData = new FormData();
      formData.append("marketplace", data.marketplace);
      formData.append("stock_days", data.stock_days);
      formData.append("our_stock", data.our_stock);
      formData.append("marketplace_stock", data.marketplace_stock);
      formData.append("products_table", data.products_table);
      formData.append("stock_table", data.stock_table);

      const response = await webReshenieAxios.post<{ code: string }>(
        "/api/table/upload/",
        formData,
      );

      if (response.status === 200) {
        dispatch(getDataThunk({ resultCode: response.data.code }));
      }
    }
  } catch (error) {
    return "malformed data";
  }
});

// export const downloadFile = createAsyncThunk(
//   "tableSlice/downloadFile",
//   async () => {
//     try {
//       const response = await webReshenieAxios.post<any>(`/api/table/download/`);

//       return response.data;
//     } catch (error) {
//       return "code does not exist, code not specified";
//     }
//   },
// );
