import { useQuery } from "@tanstack/react-query";
import type { GiphyResponse } from "../api/model";
import { fetchRandomGifs } from "../api/gifs";

export const useRandomGifs = () => {
  const { data, isLoading, error } = useQuery<GiphyResponse>({
    queryKey: ["randomGifs"],
    queryFn: ({ signal }) => fetchRandomGifs(signal),
  });

  return {
    data,
    isLoading,
    error,
  };
};
