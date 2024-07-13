import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Fact from "./components/Fact";
import NotFound from "./components/NotFound";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/fact/:factId" element={<Fact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;
