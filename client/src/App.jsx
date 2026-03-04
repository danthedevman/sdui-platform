import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RouteScreen from "./pages/RouteScreen";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<RouteScreen />} />
      </Routes>
    </Router>
  );
}
