import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPopularImages } from "../api/fetchPopularImages";
import useIntersectionObserver from "./useIntersectionObserver";
import React from "react";

const usePopularImages = () => {
  const {
    data: allPopularImages,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: ["popular-images"],
    initialPageParam: 1,
    queryFn: ({ pageParam = 1 }) => fetchPopularImages(pageParam),
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      const totalImages = +lastPage.headers["x-total"];
      if (lastPageParam >= totalImages / 20) return undefined;

      return lastPageParam + 1;
    },
    select: React.useCallback(
      (data) => data?.pages.flatMap((page) => page.data),

      []
    ),
  });

  const lastPopularImageRef = useIntersectionObserver<HTMLElement>(
    () => fetchNextPage(),
    [hasNextPage, !isFetching]
  );

  return {
    isFetching,
    allPopularImages,
    lastPopularImageRef,
  };
};

export default usePopularImages;
