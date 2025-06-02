import { useEffect } from "react";

export const useKeyboardControls = (handleRefetch: () => void) => {
  useEffect(() => {
    const handleSpacePress = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        handleRefetch();
      }
    };

    window.addEventListener("keydown", handleSpacePress);
    return () => window.removeEventListener("keydown", handleSpacePress);
  }, []);
};
