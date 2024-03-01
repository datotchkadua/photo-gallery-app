import { QueryClient } from "@tanstack/react-query";

export const queryClientOptions = {
  defaultOptions: {
    queries: {
      staleTime: 1800000, // 30 minutes (30 * 60 * 1000 ms)
      gcTime: 1800000, // 30 minutes (30 * 60 * 1000 ms)
      refetchOnWindowFocus: false,
    },
  },
};

export const queryClient = new QueryClient(queryClientOptions);
