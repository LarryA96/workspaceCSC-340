import { Link } from "react-router-dom";

//Navbar with links to each page
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="https://img.freepik.com/premium-photo/side-view-white-hatchback-car-isolated-white-background-with-clipping-path_839834-2097.jpg?semt=ais_hybrid&w=740&q=80"></img>
          Auto Collector
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/favorites">
                Favorites
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/car-of-the-week">
                Weekly Spotlight
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
