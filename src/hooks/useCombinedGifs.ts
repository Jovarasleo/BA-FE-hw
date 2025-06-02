import type { GiphyData, LocalGiphyData } from "../api/model";

interface Params {
  lockedGifs: LocalGiphyData[];
  randomGifs: GiphyData[];
}

export const useCombinedGifs = ({ lockedGifs, randomGifs }: Params) => {
  let randomGifIndex = 0;
  const lockedGifIds = new Set(lockedGifs.map((gif) => gif.id));

  const combinedGifs = randomGifs.map((_, index) => {
    const lockedGifAtIndex = lockedGifs.find((gif) => gif.position === index);
    if (lockedGifAtIndex) {
      return lockedGifAtIndex;
    }

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

  return {
    combinedGifs,
  };
};
