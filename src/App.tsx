import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/projectPage";
import ClimateSensePage from "./pages/ClimatesensePage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <main className="min-h-screen bg-[#23272a]">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/este-proyecto" element={<ProjectPage />} />
            <Route path="/climateSense" element={<ClimateSensePage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
