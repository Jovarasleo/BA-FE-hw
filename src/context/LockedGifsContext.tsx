import { createContext } from "react";
import type { GiphyData } from "../api/model";
import { useLockedGifs } from "../hooks/useLockedGifs";

interface Params {
  data: GiphyData[];
  lockGif: (id: GiphyData) => void;
  unlockGif: (id: string) => void;
  isLocked: (id: string) => boolean;
}

export const LockedGifsContext = createContext<Params | null>(null);

export const LockedGifsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { lockedGifs, lockGif, unlockGif, isLocked } = useLockedGifs();

  return (
    <LockedGifsContext.Provider
      value={{ data: lockedGifs, lockGif, unlockGif, isLocked }}
    >
      {children}
    </LockedGifsContext.Provider>
  );
};
