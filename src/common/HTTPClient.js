import axios from "axios";
const URL = import.meta.env.VITE_BASE_API_URL;

// const LANG = localStorage.getItem("locale");

const axiosClient = axios.create({
  baseURL: URL,
  headers: {
    Accept: "application/json",
    // local: LANG,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
  },
});

axiosClient.interceptors.request.use((config) => {
  // const token = window.$cookies.get("token-pharmacy");
  // config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosClient;
