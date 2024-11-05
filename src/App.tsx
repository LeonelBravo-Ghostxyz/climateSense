import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/projectPage";
import ClimateSensePage from "./pages/ClimatesensePage";
import ApiPage from "./pages/apiPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import maindb from "./db/main.json";
import Alert from './components/Alert' // Import the Alert component


function App() {
  // Get alerta value from maindb
  var alerta = maindb.horaActual.alerta;

  // Determine background color class
  let bgColorClass = "";
  if (alerta === 0) {
    bgColorClass = "greenCont";
  } else if (alerta === 1) {
    bgColorClass = "yellowCont";
  } else if (alerta === 2) {
    bgColorClass = "orangeCont";
  } else if (alerta === 3) {
    bgColorClass = "redCont";
  }

  return (
    <>
      <Router>
        <main className={`min-h-screen ${bgColorClass}`}>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/este-proyecto" element={<ProjectPage />} />
            <Route path="/climateSense" element={<ClimateSensePage />} />
            <Route path="/api" element={<ApiPage />} />
          </Routes>
        <Alert data={maindb} />
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;