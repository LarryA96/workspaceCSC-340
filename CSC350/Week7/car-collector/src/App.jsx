import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import CarsList from "./pages/CarsList";
import CarOfTheWeek from "./pages/CarOfTheWeek";
import About from "./pages/About";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<CarsList />} />
        <Route path="/car-of-the-week" element={<CarOfTheWeek />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
