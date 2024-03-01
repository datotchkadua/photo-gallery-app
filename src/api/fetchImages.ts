import unsplashApi from "./axios";

export const fetchImages = async (currentPageParam: number = 1) => {
  try {
    const response = await unsplashApi.get(`/photos`, {
      params: {
        per_page: 20,
        order_by: "popular",
        page: currentPageParam,
      },
    });

    return response;
  } catch (error) {
    console.error("Error fetching popular images:", error);
    throw error;
  }
};
