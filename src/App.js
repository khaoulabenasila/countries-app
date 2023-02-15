import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Composents/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Logo from "./Composents/Logo";

const App = () => {
  return (
    <div>
      <Logo />
      <NavBar />
      <Routes>
                 
        <Route path="/" element={<Home />} />
                 
        <Route path="/about" element={<About />} />       
      </Routes>
    </div>
  );
};

export default App;
