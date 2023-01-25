import React from "react";
import "./tailwind.css";
import Counter from "./Components/Counter";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./particles.js";
import "./particles.json";

function App() {
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load("particles-js", "particles.json");
  return (
    <div className="bg-portefolio-blue3 text-white">
      <Header className="bg-portefolio-blue3 md:bg-transparent fixed p-3 top-0 w-full h-14" />
      <div className="h-screen from-[#0b1829] to-[#003f88] bg-gradient-to-b">
        <div id="particles-js" className="h-screen w-screen"></div>
        <script src="particles.js"></script>
        <div>hello</div>
      </div>
      <div className="h-screen bg-portefolio-yellow1"></div>
      <Footer className="border-t p-3 bg-blue-50 absolute bottom-0 w-full" />
    </div>
  );
}

export default App;
