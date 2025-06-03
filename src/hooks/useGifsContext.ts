import { createContext, useContext } from "react";
import type { GiphyData, LocalGiphyData } from "../api/model";

interface Params {
  error: Error | null;
  randomGifs: GiphyData[];
  combinedGifs: GiphyData[];
  isLoading: boolean;
  refreshGifs: () => void;
  lockGif: (id: LocalGiphyData) => void;
  unlockGif: (id: string) => void;
  isLocked: (id: string) => boolean;
}

export const GifContext = createContext<Params | null>(null);

export const useGifsContext = () => {
  const context = useContext(GifContext);
  if (!context) {
    throw new Error("GifsContext is outside GifsContextProvider");
  }

  return context;
};
