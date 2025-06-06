import { useGifsContext } from "../hooks/useGifsContext";
import { useKeyboardControls } from "../hooks/useKeyboardControls";
import { Card } from "../components/card/Card";

export const Gallery = () => {
  const {
    combinedGifs,
    isLoading,
    error,
    refreshGifs,
    isLocked,
    lockGif,
    unlockGif,
  } = useGifsContext();

  useKeyboardControls(refreshGifs);

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
