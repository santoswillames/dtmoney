import axios from "axios";

export const api = axios.create({
  baseURL: "https://controlmoney.netlify.app/api",
});
