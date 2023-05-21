import { useQueries } from "@tanstack/react-query";
import api from "../api";

export default function useItemQueries<T>(ids: number[]) {
  return useQueries({
    queries: ids.map((id) => {
      return {
        queryKey: ["item", id],
        queryFn: () => api.get(`item/${id}.json`).json<T>(),
      };
    }),
  });
}
