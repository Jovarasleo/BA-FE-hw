import { createContext, useContext } from "react";
import type { GiphyData, GiphyResponse } from "../api/model";
import type { QueryObserverResult } from "@tanstack/react-query";

interface Params {
  randomGifs: GiphyData[];
  error: Error | null;
  isLoading: boolean;
  handleRefetch: () => Promise<QueryObserverResult<GiphyResponse, Error>>;
}

export const RandomGifsContext = createContext<Params | null>(null);

export const useRandomGifsContext = () => {
  const context = useContext(RandomGifsContext);
  if (!context) {
    throw new Error(
      "useRandomGifsContext is outside RandomGifsContextProvider"
    );
  }

  return context;
};
