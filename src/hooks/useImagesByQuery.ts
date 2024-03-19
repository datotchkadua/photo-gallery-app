import { useEffect, useMemo } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchImagesByQuery } from "../api/fetchImageByQuery";
import { useAppDispatch } from "../store";
import { addQuery } from "../features/queryImages/queryImagesSlice";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const useImagesByQuery = (debouncedSearchValue: string) => {
  const dispatch = useAppDispatch();
  const { data, fetchNextPage, hasNextPage, isFetching, isSuccess } =
    useInfiniteQuery({
      queryKey: ["SearchedImages", debouncedSearchValue],
      initialPageParam: 1,
      queryFn: ({ pageParam = 1 }) =>
        fetchImagesByQuery(pageParam, debouncedSearchValue),
      getNextPageParam: (lastPage, _allPages, lastPageParam) => {
        if (lastPageParam >= lastPage.total_pages) return undefined;
        return lastPageParam + 1;
      },
    });

  const lastQueryImageRef = useIntersectionObserver<HTMLElement>(
    () => fetchNextPage(),
    [hasNextPage, !isFetching]
  );

  const imagesByQuery = useMemo(() => {
    return data ? data?.pages?.flatMap((imagesData) => imagesData.results) : [];
  }, [data]);

  useEffect(() => {
    if (isSuccess && imagesByQuery.length > 0) {
      dispatch(addQuery(debouncedSearchValue));
    }
  }, [imagesByQuery, debouncedSearchValue, isSuccess, dispatch]);

  return {
    imagesByQuery,
    isFetching,
    lastQueryImageRef,
  };
};

export default useImagesByQuery;
