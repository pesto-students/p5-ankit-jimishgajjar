import { Link, BrowserRouter, Route, Routes } from "react-router-dom";

import "./style.css";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";

function App() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <div className="logo">
          <h2>Shortly</h2>
        </div>
        <ul>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              About
            </Link>
          </li>
        </ul>
      </nav>

      <div className="main">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
