import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchImages } from "../api/fetchImages";
import useIntersectionObserver from "./useIntersectionObserver";

const usePopularImages = () => {
  const {
    data: popularImages,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: ["popular-images"],
    initialPageParam: 1,
    queryFn: ({ pageParam = 1 }) => fetchImages(pageParam),
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      const totalImages = +lastPage.headers["x-total"];
      if (lastPageParam >= totalImages / 20) return undefined;

      return lastPageParam + 1;
    },
  });

  const allPopularImages = popularImages
    ? popularImages.pages.flatMap((page) => page.data)
    : [];

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
