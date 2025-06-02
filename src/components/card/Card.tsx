import type { GiphyData } from "../../api/model";
import { Button } from "../button/Button";
import { MdLockOpen } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import "./card.scss";

interface Props {
  gif: GiphyData;
  locked: boolean;
  lockGif: () => void;
  unlockGif: () => void;
}

export function Card({ gif, locked, lockGif, unlockGif }: Props) {
  const importDateWithoutTime = gif.import_datetime.split(" ")[0];

  return (
    <div className="card">
      <figure className="card__figure">
        <img
          alt={gif.title}
          srcSet={`
            ${gif.images.original.url} 260w,
            ${gif.images.fixed_width_small.url} 220w,
            ${gif.images.fixed_width_downsampled.url} 200w
          `}
          src={`${gif.images.fixed_width_downsampled.url}`}
          className="card__gif"
          loading="lazy"
        />
        <p className="card__date">{importDateWithoutTime}</p>
        <figcaption title={gif.title} className="card__caption">
          {gif.title}
        </figcaption>
      </figure>
      <Button
        className="card__lockButton"
        onClick={locked ? unlockGif : lockGif}
      >
        {locked ? <MdLockOutline /> : <MdLockOpen />}
      </Button>
    </div>
  );
}
