import { useQuery } from "@tanstack/react-query";
import api from "../api";

export default function useItemQuery<T>(id: number) {
  return useQuery({
    queryKey: ["item", id],
    queryFn: () => {
      return api.get(`item/${id}.json`).json<T>();
    },
  });
}
