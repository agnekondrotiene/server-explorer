import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://playground.tesonet.lt/v1",
  timeout: 1000,
});

export default apiClient;
