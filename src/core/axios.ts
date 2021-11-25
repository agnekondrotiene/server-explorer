import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://playground.tesonet.lt/v1",
  timeout: 1000,
});

apiClient.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.config.url === "tokens") {
      return Promise.reject(error);
    }

    if (error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = window.location.origin;
    }

    return Promise.reject(error);
  }
);

export default apiClient;
