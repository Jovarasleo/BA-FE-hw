import { BiRefresh } from "react-icons/bi";
import { useRandomGifsContext } from "../../hooks/useRandomGifsContext";
import { Button } from "../button/Button";
import "./footer.scss";

export const Footer = () => {
  const { randomGifs, error, handleRefetch } = useRandomGifsContext();

  return (
    !error &&
    randomGifs.length && (
      <Button className="refreshBtn" onClick={handleRefetch}>
        <BiRefresh />
        Hit here to refresh gifs or press space
      </Button>
    )
  );
};
