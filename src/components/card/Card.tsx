import { LockButton } from "../lockButton/lockButton";
import "./card.scss";

interface Props {
  url: string;
  importDate: string;
  locked: boolean;
  lockGif: () => void;
  unlockGif: () => void;
}

export function Card({ url, locked, lockGif, unlockGif }: Props) {
  return (
    <div className="card">
      <img src={url} className="gif" />
      <LockButton locked={locked} onClick={locked ? unlockGif : lockGif} />
      <p></p>
    </div>
  );
}
