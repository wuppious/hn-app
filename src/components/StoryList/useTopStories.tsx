import { useCallback, useEffect, useMemo, useState } from "react";
import { useItemQueries, useTopStoriesQuery } from "@/queries";

const PAGE_SIZE = 20;

// This is to remember the page we're on with the infinite loader, for scroll
// restoration. I don't exactly want to setup a store only for this purpose, so
// let's use a top level variable, just this once...
let pageToRemember = 1;

export function useTopStories() {
  /**
   * No pagination provided by the endpoint, so we have to create our own.
   * Load all top story ids, but only return a subset of them based on the page
   * number.
   */
  const { data, isLoading, error } = useTopStoriesQuery();
  const [page, setPage] = useState(pageToRemember);

  useEffect(() => {
    pageToRemember = page;
  }, [page]);

  const ids = useMemo(() => {
    return data?.slice(0, page * PAGE_SIZE) ?? [];
  }, [page, data]);

  const storyQueries = useItemQueries(ids);
  const isStoriesLoading = storyQueries.some((q) => q.isLoading);

  const nextPage = useCallback(() => {
    if (!data || page * PAGE_SIZE > data.length) {
      return;
    }

    setPage((p) => p + 1);
  }, [page, setPage, data]);

  return useMemo(() => {
    return {
      ids,
      isLoading,
      isStoriesLoading,
      error,
      nextPage,
    };
  }, [error, isLoading, isStoriesLoading, ids, nextPage]);
}
