import { createContext, useContext } from "react";
import type { GiphyData, GiphyResponse, LocalGiphyData } from "../api/model";
import type { QueryObserverResult } from "@tanstack/react-query";

interface Params {
  error: Error | null;
  randomGifs: GiphyData[];
  combinedGifs: GiphyData[];
  isLoading: boolean;
  handleRefetch: () => Promise<QueryObserverResult<GiphyResponse, Error>>;
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
