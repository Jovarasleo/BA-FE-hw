import type { GiphyResponse } from "./model";

const { VITE_API_KEY } = import.meta.env;

const GIFS_LIMIT = 12;
const BUNDLE = "messaging_non_clips";
const ENDPOINT = "https://api.giphy.com/v1/gifs/trending?";

function getRandomizedOffset(min = 0, max = 480): number {
  const seed = Date.now() + performance.now();
  const pseudoRandom = Math.sin(seed) * 10000;
  const normalized = pseudoRandom - Math.floor(pseudoRandom);

  return Math.floor(normalized * (max - min + 1)) + min;
}

const urlParams = new URLSearchParams({
  api_key: VITE_API_KEY,
  limit: GIFS_LIMIT.toString(),
  offset: getRandomizedOffset().toString(),
  bundle: BUNDLE,
});

export const fetchRandomGifs = async (
  signal?: AbortSignal
): Promise<GiphyResponse> => {
  const url = `${ENDPOINT}${urlParams}`;
  const res = await fetch(url, { signal });

  if (res.status === 429) {
    throw new Error("Requests limit reached");
  }

  if (!res.ok) {
    throw new Error("Failed to fetch trending GIFs");
  }

  return res.json();
};
