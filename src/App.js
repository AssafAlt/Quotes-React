import { Route, Routes, Navigate } from "react-router-dom";

import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/posts" element={<AllQuotes />} />
        <Route path="/" element={<Navigate to="/posts" />} />

        <Route path="/posts/:postId" element={<QuoteDetail />} />
        <Route path="/new-post" element={<NewQuote />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
