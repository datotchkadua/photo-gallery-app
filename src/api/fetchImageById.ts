import customFetch from "./axios";

export const fetchImageById = async (imageId: string) => {
  try {
    const response = await customFetch.get(`/photos/${imageId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching image:", error);
    throw error;
  }
};
