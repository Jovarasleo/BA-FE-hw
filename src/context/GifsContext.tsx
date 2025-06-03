import type { ReactNode } from "react";
import { useCombinedGifs } from "../hooks/useCombinedGifs";
import { GifContext } from "../hooks/useGifsContext";
import { useLockedGifs } from "../hooks/useLockedGifs";
import { useRandomGifs } from "../hooks/useRandomGifs";
import { GIFS_LIMIT } from "../api/gifs";

export const GifsProvider = ({ children }: { children: ReactNode }) => {
  const {
    lockedGifs,
    initialLockedGifs,
    lockGif,
    unlockGif,
    isLocked,
    resetInitialGifs,
  } = useLockedGifs();
  const { randomGifs, error, isLoading, handleRefetch } = useRandomGifs();
  const { combinedGifs } = useCombinedGifs({
    lockedGifs: initialLockedGifs,
    randomGifs,
  });

  const refreshGifs = () => {
    if (lockedGifs.length === GIFS_LIMIT) {
      return;
    }

    resetInitialGifs();
    handleRefetch();
  };

  return (
    <GifContext.Provider
      value={{
        error,
        isLoading,
        randomGifs,
        combinedGifs,
        refreshGifs,
        lockGif,
        unlockGif,
        isLocked,
      }}
    >
      {children}
    </GifContext.Provider>
  );
};
