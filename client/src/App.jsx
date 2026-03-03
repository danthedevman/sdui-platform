// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteScreen from "./pages/RouteScreen";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<RouteScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
