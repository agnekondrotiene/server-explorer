import { useQuery } from "react-query";
import apiClient from "../core/axios";

export const useServersQuery = () => {
  const {
    isLoading,
    error,
    data: servers,
  } = useQuery("servers", async () => {
    const { data } = await apiClient.get("/servers");
    return data;
  });

  return { isLoading, error, servers };
};
