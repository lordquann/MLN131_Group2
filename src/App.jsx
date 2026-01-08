import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import InfoPage from "./components/pages/InfoPage";
import ApplicationPage from "./components/pages/ApplicationPage";
import GamePage from "./components/pages/3dMuseum";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="app-shell">
        <Navbar />

        <main className="app-main">
          <Routes>
            <Route path="/" element={<InfoPage />} />
            <Route path="/application" element={<ApplicationPage />} />
            <Route path="/game" element={<GamePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
