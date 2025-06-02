import { useEffect } from "react";
import { useCombinedGifs } from "../hooks/useCombinedGifs";
import { useRandomGifs } from "../hooks/useRandomGifs";
import { useLockedGifsContext } from "../hooks/useLockedGifsContext";
import { Card } from "../components/card/Card";
import { BiRefresh } from "react-icons/bi";
import { Button } from "../components/button/Button";

export function Gallery() {
  const {
    data: lockedGifs,
    unlockGif,
    lockGif,
    isLocked,
  } = useLockedGifsContext();
  const { randomGifs, handleRefetch } = useRandomGifs();
  const { combinedGifs } = useCombinedGifs({
    lockedGifs,
    randomGifs: randomGifs?.data ?? [],
  });

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

  return (
    <>
      <h1>Giphy</h1>
      <main>
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
      </main>
      <Button className="refreshBtn" onClick={handleRefetch}>
        <BiRefresh />
        Hit here to refresh gifs or press space
      </Button>
    </>
  );
}
