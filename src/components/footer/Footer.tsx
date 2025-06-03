import { BiRefresh } from "react-icons/bi";
import { useGifsContext } from "../../hooks/useGifsContext";
import { Button } from "../button/Button";
import "./footer.scss";

export const Footer = () => {
  const { randomGifs, error, refreshGifs } = useGifsContext();

  return (
    !error &&
    randomGifs.length > 0 && (
      <Button className="refreshBtn" onClick={refreshGifs}>
        <BiRefresh />
        <span className="refreshBtn__text">
          Hit here to refresh gifs or press space
        </span>
      </Button>
    )
  );
};
