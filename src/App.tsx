import { LockedGifsProvider } from "./context/LockedGifsContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Gallery } from "./views/Gallery";
import "./App.scss";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <LockedGifsProvider>
        <Gallery />
      </LockedGifsProvider>
    </QueryClientProvider>
  );
}

export default App;
