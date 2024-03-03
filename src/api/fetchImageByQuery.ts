import customFetch from "./axios";

export const fetchImagesByQuery = async (
  currentPageParam: number = 1,
  query: string
) => {
  try {
    const response = await customFetch.get(`/search/photos`, {
      params: {
        query: query,
        per_page: 20,
        page: currentPageParam,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching images by query:", error);
    throw error;
  }
};
