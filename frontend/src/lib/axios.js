import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000/api"
    : import.meta.env.BACKEND_URL + "/api";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
