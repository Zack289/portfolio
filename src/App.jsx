import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/home/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import CursorBg from "./components/CrusorBg";
import AnimatedCursor from "react-animated-cursor";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <CursorBg />
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
        outerStyle={{
          border: "3px solid var(--cursor-color)",
        }}
      />
      <ScrollToTop />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
