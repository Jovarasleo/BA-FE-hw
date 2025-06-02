import { LockedGifsProvider } from "./context/LockedGifsContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Gallery } from "./views/Gallery";
import "./styles/App.scss";
import { Layout } from "./components/layout/Layout";
import { RandomGifsProvider } from "./context/RandomGifsContext";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <LockedGifsProvider>
        <RandomGifsProvider>
          <Layout>
            <Gallery />
          </Layout>
        </RandomGifsProvider>
      </LockedGifsProvider>
    </QueryClientProvider>
  );
}

export default App;
