import type { GiphyResponse } from "./model";

const { VITE_API_KEY } = import.meta.env;

export const fetchRandomGifs = async (
  signal?: AbortSignal
): Promise<GiphyResponse> => {
  const url = `https://api.giphy.com/v1/gifs/trending?api_key=${VITE_API_KEY}&limit=10&rating=g&bundle=messaging_non_clips`;

  const res = await fetch(url, { signal });

  if (!res.ok) {
    throw new Error("Failed to fetch trending GIFs");
  }

  return res.json();
};
