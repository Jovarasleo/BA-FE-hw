import { useLockedGifs } from "../hooks/useLockedGifs";
import { LockedGifsContext } from "../hooks/useLockedGifsContext";

export const LockedGifsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { lockedGifs, lockGif, unlockGif, isLocked } = useLockedGifs();

  return (
    <LockedGifsContext.Provider
      value={{
        data: lockedGifs,
        lockGif,
        unlockGif,
        isLocked,
      }}
    >
      {children}
    </LockedGifsContext.Provider>
  );
};
