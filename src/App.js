
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Post from "./pages/Post.js";
import About from "./pages/About.js";
import Writeups from "./pages/Writeups.js";
import WriteupDetail from "./pages/WriteupDetail.js";
import Contact from "./pages/Contact.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import './App.css';

function App() {
  return (
    <Router basename="/blogs">
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:slug" element={<Post />} />
          <Route path="/about" element={<About />} />
          <Route path="/writeups" element={<Writeups />} />
          <Route path="/writeup/:slug" element={<WriteupDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
