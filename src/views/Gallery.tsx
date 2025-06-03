import { Card } from "../components/card/Card";
import { useGifsContext } from "../hooks/useGifsContext";
import { useKeyboardControls } from "../hooks/useKeyboardControls";

export const Gallery = () => {
  const {
    combinedGifs,
    isLoading,
    error,
    handleRefetch,
    isLocked,
    lockGif,
    unlockGif,
  } = useGifsContext();

  useKeyboardControls(handleRefetch);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>{error.message}</span>;
  }

  return (
    <section className="gallery">
      {combinedGifs.map((gif, index) => (
        <Card
          key={gif.id}
          gif={gif}
          locked={isLocked(gif.id)}
          lockGif={() => lockGif({ ...gif, position: index })}
          unlockGif={() => unlockGif(gif.id)}
        />
      ))}
    </section>
  );
};
