import { Card } from "../components/card/Card";
import { useCombinedGifs } from "../hooks/useCombinedGifs";
import { useRandomGifs } from "../hooks/useRandomGifs";
import { useLockedGifsContext } from "../hooks/useLockedGifsContext";

export function Gallery() {
  const {
    data: lockedGifs,
    unlockGif,
    lockGif,
    isLocked,
  } = useLockedGifsContext();
  const { randomGifs, refetch } = useRandomGifs();
  const { combinedGifs } = useCombinedGifs({
    lockedGifs,
    randomGifs: randomGifs?.data ?? [],
  });

  return (
    <>
      <h1>Giphy</h1>
      <main>
        {combinedGifs.map((gif, index) => (
          <Card
            key={gif.id}
            gif={gif}
            locked={isLocked(gif.id)}
            lockGif={() => lockGif({ ...gif, position: index })}
            unlockGif={() => unlockGif(gif.id)}
          />
        ))}
      </main>
      <button onClick={() => refetch()}>refetch gifs</button>
    </>
  );
}
