import type { ReactNode } from "react";
import { useRandomGifs } from "../hooks/useRandomGifs";
import { RandomGifsContext } from "../hooks/useRandomGifsContext";

export const RandomGifsProvider = ({ children }: { children: ReactNode }) => {
  const { randomGifs, error, isLoading, handleRefetch } = useRandomGifs();

  return (
    <RandomGifsContext.Provider
      value={{ randomGifs, error, isLoading, handleRefetch }}
    >
      {children}
    </RandomGifsContext.Provider>
  );
};
