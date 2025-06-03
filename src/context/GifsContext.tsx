import type { ReactNode } from "react";
import { useCombinedGifs } from "../hooks/useCombinedGifs";
import { GifContext } from "../hooks/useGifsContext";
import { useLockedGifs } from "../hooks/useLockedGifs";
import { useRandomGifs } from "../hooks/useRandomGifs";

export const GifsProvider = ({ children }: { children: ReactNode }) => {
  const { randomGifs, error, isLoading, handleRefetch } = useRandomGifs();
  const { lockedGifs, lockGif, unlockGif, isLocked } = useLockedGifs();
  const { combinedGifs } = useCombinedGifs({
    lockedGifs,
    randomGifs,
  });

  return (
    <GifContext.Provider
      value={{
        error,
        isLoading,
        randomGifs,
        combinedGifs,
        handleRefetch,
        lockGif,
        unlockGif,
        isLocked,
      }}
    >
      {children}
    </GifContext.Provider>
  );
};
