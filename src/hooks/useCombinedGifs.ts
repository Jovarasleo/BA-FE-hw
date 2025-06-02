import { useMemo } from "react";
import type { GiphyData, LocalGiphyData } from "../api/model";

interface Params {
  lockedGifs: LocalGiphyData[];
  randomGifs: GiphyData[];
}

export const useCombinedGifs = ({ lockedGifs, randomGifs }: Params) => {
  let randomGifIndex = 0;
  const lockedGifIds = new Set(lockedGifs.map((gif) => gif.id));

  const combinedGifs = useMemo(
    () =>
      randomGifs.map((_, index) => {
        const lockedGifAtIndex = lockedGifs.find(
          (gif) => gif.position === index
        );

        if (lockedGifAtIndex) {
          return lockedGifAtIndex;
        }

        //Skip randomGif if it's already in lockedGifs array
        while (
          randomGifIndex < randomGifs.length &&
          lockedGifIds.has(randomGifs[randomGifIndex].id)
        ) {
          randomGifIndex++;
        }

        const nextUniqueGif = randomGifs[randomGifIndex];
        randomGifIndex++;

        return nextUniqueGif;
      }),
    [randomGifs]
  );

  return {
    combinedGifs,
  };
};
