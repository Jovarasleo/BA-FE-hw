import type { ReactNode } from "react";
import { useLockedGifs } from "../hooks/useLockedGifs";
import { LockedGifsContext } from "../hooks/useLockedGifsContext";

export const LockedGifsProvider = ({ children }: { children: ReactNode }) => {
  const { lockedGifs, lockGif, unlockGif, isLocked } = useLockedGifs();

  return (
    <LockedGifsContext.Provider
      value={{
        lockedGifs,
        lockGif,
        unlockGif,
        isLocked,
      }}
    >
      {children}
    </LockedGifsContext.Provider>
  );
};
