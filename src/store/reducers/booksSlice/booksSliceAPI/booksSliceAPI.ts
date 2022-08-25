import { webReshenieAxios } from "./../../../../lib/http/index";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const postBooksThunk = createAsyncThunk(
  "booksSlice/postBooksThunk",
  async ({ formData }: any, thunkAPI) => {
    try {
      const response = await webReshenieAxios.post(
        "/api/table/upload/",
        formData,
      );
      return console.log(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue("Error!");
    }
  },
);
// http://192.168.145.195:5998/api/table/download/
