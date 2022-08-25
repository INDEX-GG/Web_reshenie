import axios from "axios";
import { BASE_URL, TIMEOUT } from "../constants/constants";

export const createApi = () => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
  });

  return api;
};

export const webReshenieAxios = createApi();
