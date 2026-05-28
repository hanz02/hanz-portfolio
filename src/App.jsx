import { HashRouter, Routes, Route } from "react-router";

import Header from "./pages/Header";

import Photography from "./pages/Photography";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Footer from "./pages/Footer";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
