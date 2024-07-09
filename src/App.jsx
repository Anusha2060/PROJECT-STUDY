import { useState } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Blogs from "./Pages/Blog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Router>
        <div className="">
          <Nav />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blogs" element={<Blogs/>} />

          </Routes>
        </div>
        <div className="relative">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
