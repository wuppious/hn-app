import { QueryClient } from "@tanstack/react-query";

export { default as useItemQuery } from "./useItemQuery";
export { default as useItemQueries } from "./useItemQueries";
export { default as useTopStoriesQuery } from "./useTopStoriesQuery";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // No need for background refreshes
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

export default queryClient;
