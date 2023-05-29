import React from "react";
import Home from "./Home";
import Bio from "./Bio";
import Portfolio from "./Portfolio";
import Services from "./services";
import Contact from "./Contact";
import Footer from "./footer";
import Fade from "react-awesome-reveal"
function App() {
  return (
    <div className="App">
      <Home />
      <Fade direction="right">
        <Bio />
        <Portfolio />
        <Services />
        <Contact />
        <Footer />
      </Fade>
    </div>
  );
}
export default App;
