import { BiRefresh } from "react-icons/bi";
import { useRandomGifsContext } from "../../hooks/useRandomGifsContext";
import { Button } from "../button/Button";
import "./footer.scss";

export const Footer = () => {
  const { randomGifs, error, handleRefetch } = useRandomGifsContext();

  return (
    !error &&
    randomGifs.length > 0 && (
      <Button className="refreshBtn" onClick={handleRefetch}>
        <BiRefresh />
        <span className="refreshBtn__text">
          Hit here to refresh gifs or press space
        </span>
      </Button>
    )
  );
};
