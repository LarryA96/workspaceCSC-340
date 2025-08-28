import Home from "./pages/Home";
import Map from "./pages/Map";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container">
            <Link to="/" class="navbar-brand">
              Larry Alston
            </Link>
            <div>
              <ul class="navbar-nav me-auto">
                <li class="nav-item">
                  <Link to="/" class="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/map" class="nav-link">
                    Map
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
