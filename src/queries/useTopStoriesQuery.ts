import { useQuery } from "@tanstack/react-query";
import api from "../api";
import { TopStories } from "../types";

export default function useTopStoriesQuery() {
  return useQuery({
    queryKey: ["top-posts"],
    queryFn: () => {
      return api.get("topstories.json").json<TopStories>();
    },
  });
}
