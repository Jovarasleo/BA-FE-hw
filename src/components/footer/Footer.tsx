import { useRandomGifsContext } from "../../hooks/useRandomGifsContext";
import { Button } from "../button/Button";
import { BiRefresh } from "react-icons/bi";

export const Footer = () => {
  const { handleRefetch } = useRandomGifsContext();

  return (
    <Button className="refreshBtn" onClick={handleRefetch}>
      <BiRefresh />
      Hit here to refresh gifs or press space
    </Button>
  );
};
