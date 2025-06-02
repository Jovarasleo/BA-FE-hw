import { createContext, useContext } from "react";
import type { LocalGiphyData } from "../api/model";

interface Params {
  lockedGifs: LocalGiphyData[];
  lockGif: (id: LocalGiphyData) => void;
  unlockGif: (id: string) => void;
  isLocked: (id: string) => boolean;
}

export const LockedGifsContext = createContext<Params | null>(null);

export const useLockedGifsContext = () => {
  const context = useContext(LockedGifsContext);
  if (!context) {
    throw new Error(
      "useLockedGifsContext is outside LockedGifsContextProvider"
    );
  }

  return context;
};
