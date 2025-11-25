import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Bugs from "./pages/Bugs.js";
import Life from "./pages/Life.js";
import './App.css';

function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bugs" element={<Bugs />} />
          <Route path="/life" element={<Life />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
