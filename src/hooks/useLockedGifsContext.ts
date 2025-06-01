import { useContext } from "react";
import { LockedGifsContext } from "../context/LockedGifsContext";

export const useLockedGifsContext = () => {
  const context = useContext(LockedGifsContext);
  if (!context) {
    throw new Error("useLockedGifsContext is outside lockedGifsProvider");
  }

  return context;
};
