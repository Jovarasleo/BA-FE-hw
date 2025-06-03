import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import type { GiphyResponse } from "../api/model";
import { fetchRandomGifs } from "../api/gifs";

export const useRandomGifs = () => {
  const { data, isLoading, error, refetch } = useQuery<GiphyResponse>({
    queryKey: ["randomGifs"],
    queryFn: ({ signal }) => fetchRandomGifs(signal),
  });

  const handleRefetch = () => refetch();

  const sortedGifs = useMemo(() => {
    if (!data?.data) {
      return [];
    }

    return [...data.data].sort(
      (a, b) =>
        new Date(a.import_datetime).getTime() -
        new Date(b.import_datetime).getTime()
    );
  }, [data]);

  return {
    randomGifs: sortedGifs,
    isLoading,
    error,
    handleRefetch,
  };
};
