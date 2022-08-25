import { webReshenieAxios } from "./../../../../lib/http/index";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { dataItem } from "../tableSlice";

export const getDataThunk = createAsyncThunk(
  "tableSlice/getData",
  async ({ resultKode }: any, thunkAPI) => {
    try {
      const response = await webReshenieAxios.get<dataItem[]>(
        `/api/table/upload/?code=${resultKode}`,
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error!");
    }
  },
);
