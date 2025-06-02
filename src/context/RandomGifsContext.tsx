import { useRandomGifs } from "../hooks/useRandomGifs";
import { RandomGifsContext } from "../hooks/useRandomGifsContext";

export const RandomGifsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { randomGifs, error, isLoading, handleRefetch } = useRandomGifs();

  return (
    <RandomGifsContext.Provider
      value={{ randomGifs, error, isLoading, handleRefetch }}
    >
      {children}
    </RandomGifsContext.Provider>
  );
};
