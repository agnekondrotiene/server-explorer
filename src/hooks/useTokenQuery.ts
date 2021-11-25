import { useMutation, UseMutationResult } from "react-query";
import apiClient from "../core/axios";
import { TokenResponse, Credentials } from "../types";

type UseTokenMutation = UseMutationResult<
  TokenResponse,
  unknown,
  Credentials,
  unknown
>;

const useTokenQuery = (
  onSuccess: (data: TokenResponse) => void
): UseTokenMutation => {
  return useMutation(
    async (user) => {
      const { data } = await apiClient.post("/tokens", user);
      return data;
    },
    {
      onSuccess,
    }
  );
};

export default useTokenQuery;
