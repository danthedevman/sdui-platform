import { useLocation } from "react-router-dom";
import { useScreen } from "../hooks/useScreen";
import ScreenRenderer from "./ScreenRenderer";

export default function RouteScreen() {
  const { pathname } = useLocation();
  const { data: screen, loading, error } = useScreen(pathname);

  if (loading) return <p>Loading…</p>;
  if (error) return <p>Failed to load screen.</p>;
  if (!screen) return <p>404</p>;

  return <ScreenRenderer screen={screen} />;
}
