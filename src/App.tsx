import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GifsProvider } from "./context/GifsContext";
import { Layout } from "./components/layout/Layout";
import { Gallery } from "./views/Gallery";
import "./styles/App.scss";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GifsProvider>
        <Layout>
          <Gallery />
        </Layout>
      </GifsProvider>
    </QueryClientProvider>
  );
};

export default App;
