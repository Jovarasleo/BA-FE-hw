import { useRandomGifs } from "../hooks/useGifs";

export function Gallery() {
  const { data } = useRandomGifs();

  return (
    <>
      <h1>Giphy</h1>
      {data?.data.map((gif) => (
        <img
          key={gif.id}
          src={gif.images.fixed_width_downsampled.url}
          style={{ height: 100, width: 100 }}
        />
      ))}
    </>
  );
}
