import type { GiphyData, LocalGiphyData } from "../api/model";

interface Params {
  lockedGifs: LocalGiphyData[];
  randomGifs: GiphyData[];
}

export const useCombinedGifs = ({ lockedGifs, randomGifs }: Params) => {
  const combinedGifs = randomGifs.map((gif, index) => {
    const lockedGifAtCurrentIndex = lockedGifs.find(
      (lockedGif) => lockedGif.position === index
    );

    //TODO: might encounter same gif in locked and random arrays at different position causing key issues
    return lockedGifAtCurrentIndex ?? gif;
  });

  return {
    combinedGifs,
  };
};
