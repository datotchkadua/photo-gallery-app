import customFetch from "./axios";

export const fetchImagesByQuery = async (query = "tbilisi") => {
  try {
    const response = await customFetch.get(`/search/photos`, {
      params: {
        query: query,
      },
    });
    return response;
  } catch (error) {
    console.error("Error fetching images by query:", error);
    throw error;
  }
};
