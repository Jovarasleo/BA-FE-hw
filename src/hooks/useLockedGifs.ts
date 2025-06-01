import { useState } from "react";
import type { LocalGiphyData } from "../api/model";

const STORAGE_KEY = "lockedGifs";

const getStorageItem = (key: string, fallbackValue = []) => {
  const saved = localStorage.getItem(key);
  const value = saved ? JSON.parse(saved) : fallbackValue;
  return value;
};

export const useLockedGifs = () => {
  const [lockedGifs, setLockedGifs] = useState<LocalGiphyData[]>(
    getStorageItem(STORAGE_KEY)
  );

  const lockGif = (gif: LocalGiphyData) => {
    const updated = [...lockedGifs, gif];
    setLockedGifs(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const unlockGif = (id: string) => {
    const updated = lockedGifs.filter((gif) => gif.id !== id);
    setLockedGifs(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const isLocked = (id: string) => lockedGifs.some((gif) => gif.id === id);

  return { lockedGifs, lockGif, unlockGif, isLocked };
};
