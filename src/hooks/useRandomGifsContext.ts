import { useContext } from "react";
import { RandomGifsContext } from "../context/RandomGifsContext";

export const useRandomGifsContext = () => {
  const context = useContext(RandomGifsContext);
  if (!context) {
    throw new Error("useRandomGifsContext is outside randomGifsProvider");
  }

  return context;
};
