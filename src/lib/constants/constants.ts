export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const TIMEOUT = +(process.env.REACT_APP_TIMEOUT || 5000);
export const IS_DEV = process.env.NODE_ENV === "development";
export const IS_PRODUCTION = !IS_DEV;
