import { createContext } from "react";
import type { GiphyResponse } from "../api/model";
import { useRandomGifs } from "../hooks/useRandomGifs";
import type { QueryObserverResult } from "@tanstack/react-query";

interface Params {
  randomGifs?: GiphyResponse;
  error: Error | null;
  isLoading: boolean;
  handleRefetch: () => Promise<QueryObserverResult<GiphyResponse, Error>>;
}

export const RandomGifsContext = createContext<Params | null>(null);

export const RandomGifsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { randomGifs, error, isLoading, handleRefetch } = useRandomGifs();

  return (
    <RandomGifsContext.Provider
      value={{ randomGifs, error, isLoading, handleRefetch }}
    >
      {children}
    </RandomGifsContext.Provider>
  );
};
