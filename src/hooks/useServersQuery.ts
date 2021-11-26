import { useQuery } from "react-query";
import apiClient from "../core/axios";
import { Server } from "../types";

export const useServersQuery = () => {
  const {
    isLoading,
    error,
    data: servers,
  } = useQuery<Server[]>("servers", async () => {
    const { data } = await apiClient.get("/servers");
    return data;
  });

  return { isLoading, error, servers };
};
