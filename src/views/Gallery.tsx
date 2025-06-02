import { Card } from "../components/card/Card";
import { useCombinedGifs } from "../hooks/useCombinedGifs";
import { useKeyboardControls } from "../hooks/useKeyboardControls";
import { useLockedGifsContext } from "../hooks/useLockedGifsContext";
import { useRandomGifsContext } from "../hooks/useRandomGifsContext";

export const Gallery = () => {
  const {
    data: lockedGifs,
    unlockGif,
    lockGif,
    isLocked,
  } = useLockedGifsContext();

  const { randomGifs, error, isLoading, handleRefetch } =
    useRandomGifsContext();

  const { combinedGifs } = useCombinedGifs({
    lockedGifs,
    randomGifs,
  });

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
