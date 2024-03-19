import { fetchPopularImages } from "../api/fetchPopularImages";
import useIntersectionObserver from "./useIntersectionObserver";

import { useInfiniteQuery } from "@tanstack/react-query";

const usePopularImages = () => {
  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
    queryKey: ["popular-images"],
    initialPageParam: 1,
    queryFn: ({ pageParam = 1 }) => fetchPopularImages(pageParam),
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      const totalImages = +lastPage.headers["x-total"];
      if (lastPageParam >= totalImages / 20) return undefined;

      return lastPageParam + 1;
    },
  });

  const allPopularImages = data ? data.pages.flatMap((page) => page.data) : [];

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
