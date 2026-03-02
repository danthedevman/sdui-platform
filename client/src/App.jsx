import { useScreen } from "./hooks/useScreen.js";
import Renderer from "./pages/Renderer.jsx";

export default function App() {
  const { data, loading } = useScreen("/");

  if (loading) return <p>Loading...</p>;

  return <Renderer screen={data} />;
}
