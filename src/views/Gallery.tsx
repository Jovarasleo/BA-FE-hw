import { Card } from "../components/card/Card";
import { useRandomGifs } from "../hooks/useGifs";
import { useLockedGifsContext } from "../hooks/useLockedGifsContext";

export function Gallery() {
  const { lockGif, unlockGif, isLocked } = useLockedGifsContext();
  const { data } = useRandomGifs();

  return (
    <>
      <h1>Giphy</h1>
      <main>
        {data?.data.map((gif) => (
          <Card
            key={gif.id}
            url={gif.images.fixed_width_downsampled.url}
            importDate={gif.import_datetime}
            locked={isLocked(gif.id)}
            lockGif={() => lockGif(gif)}
            unlockGif={() => unlockGif(gif.id)}
          />
        ))}
      </main>
    </>
  );
}
