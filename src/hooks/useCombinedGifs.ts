import { useMemo } from "react";
import type { GiphyData, LocalGiphyData } from "../api/model";

interface Params {
  initialLockedGifs: LocalGiphyData[];
  randomGifs: GiphyData[];
}

export const useCombinedGifs = ({ initialLockedGifs, randomGifs }: Params) => {
  const combinedGifs = useMemo(() => {
    const lockedGifIds = new Set(initialLockedGifs.map((gif) => gif.id));
    let randomGifIndex = 0;

    return randomGifs.map((_, index) => {
      const lockedGifAtIndex = initialLockedGifs.find(
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
    });
  }, [randomGifs, initialLockedGifs]);

  return {
    combinedGifs,
  };
};
