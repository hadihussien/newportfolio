import React, { useState } from "react";
import Home from "./Home";
import Bio from "./Bio";
import Portfolio from "./Portfolio";
import Services from "./services";
import Contact from "./Contact";
import Footer from "./footer";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
function App() {
  const customanimation = keyframes`
  from{
    opacity:0;
    transform:translate3d(0px,-300px,0);
  }
  to{
    opacity:1;
    transform:translate3d(0px,0px,0px);
  }`;
  return (
    <div className="App">
      <Home />
      <Reveal triggerOnce keyframes={customanimation}>
        <Bio />
        <Portfolio />
        <Services />
        <Contact />
      </Reveal>
      <Footer />
    </div>
  );
}
export default App;
