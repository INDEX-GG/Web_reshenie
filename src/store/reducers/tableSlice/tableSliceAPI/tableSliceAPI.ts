import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { dataItem } from "../counterSlice";

export const getDataThunk = createAsyncThunk(
  "tableSlice/getData",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<dataItem[]>(
        "http://192.168.145.195:5998/api/table/upload/?code=yandex",
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error!");
    }
  },
);
// export const postDataThunk = createAsyncThunk(
//   "tableSlice/getData",
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.post(
//         "http://192.168.145.195:5998/api/table/upload/",
//         {
//           marketplace: "yandex",
//           stock_days: "5",
//           stock: "jiojio",
//           table:
//             "@Ozon-postavki-_-kopiya.xlsx;type=application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//         },
//       );
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue("Error!");
//     }
//   },
// );
