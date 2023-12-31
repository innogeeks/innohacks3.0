import React, { Fragment } from "react";
import $ from "jquery";
import "../src/App.css"
import "../src/Main.js"
import "../src/css/animation/animation.css"
import "../src/css/animation/animate.min.css"
import "../src/css/bootstrap/bootstrap.css"
// import "../src/"
// import "../src/js/bootstrap/bootstrap.bundle.min.js"
// import "../src/js/bootstrap/bootstrap.min.js"
// import "..src/js/Easing.js"
// import "..src/js/Easing.min.js"
import Intro from "./Intro";
import About from "./About";
import Speaker from "./Speaker"
import Schedule from "./Schedule";
import Venue from "./Venue";
import Gallery from "./Gallery";
import Sponsor from "./Sponsor";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header.js";

function App() {
  return (
    <div className="App">
      <Fragment>
            {/* <Navbar/> */}
            <div
                style={{
                    // overflowY: "scroll",
                    // height: "800px",
                }}
            ></div>
        </Fragment>
        <Header/>
        <Intro/>
        <About/>
        <Speaker/>
        <Schedule/>
        <Venue/>
        <Gallery/>
        <Sponsor/>
        <FAQ/>
        <Contact/>
        <Footer/>
        </div>
    
  )
}

export default App;
