import { webReshenieAxios } from "./../../../../lib/http/index";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IdataItem } from "types/types";

export const getDataThunk = createAsyncThunk(
  "tableSlice/getData",
  async ({ resultKode }: any, thunkAPI) => {
    try {
      const response = await webReshenieAxios.get<IdataItem[]>(
        `/api/table/upload/?code=${resultKode}`,
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error!");
    }
  },
);
