import { useCallback, useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

import { fetchImagesByQuery } from "../api/fetchImageByQuery";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const useImagesByQuery = (debouncedSearchValue: string) => {
  const {
    data: imagesByQuery,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isSuccess,
  } = useInfiniteQuery({
    queryKey: ["SearchedImages", debouncedSearchValue],
    initialPageParam: 1,
    queryFn: ({ pageParam = 1 }) =>
      fetchImagesByQuery(pageParam, debouncedSearchValue),
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPageParam >= lastPage.total_pages) return undefined;
      return lastPageParam + 1;
    },
    select: useCallback(
      (data) => data?.pages?.flatMap((imagesData) => imagesData.results),
      []
    ),
  });

  const lastQueryImageRef = useIntersectionObserver<HTMLElement>(
    () => fetchNextPage(),
    [hasNextPage, !isFetching]
  );

  useEffect(() => {
    if (isSuccess) {
      console.log("changed successfully");
    }
  }, [imagesByQuery, debouncedSearchValue, isSuccess]);

  return {
    imagesByQuery,
    fetchNextPage,
    hasNextPage,
    isFetching,
    lastQueryImageRef,
  };
};

export default useImagesByQuery;
