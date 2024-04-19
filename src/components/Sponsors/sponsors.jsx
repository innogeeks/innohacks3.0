import { useEffect } from "react";
import "./sponsors.scss";
import arrow from "./assets/arrow.png"

function SponsorsHead() {
  return (
    <h1
      className="shead"
    >
      Our Sponsors & Partners
    </h1>
  );
}

function Sponsor(props) {
  return (
    <div
      className="Sponsor"
    >
      <img src={props} alt="InnoHacks"></img>
    </div>
  );
}

function SponsorUS() {
  return (
    <div className="joinT sponsorUS">
      <h3 style={{color:"#754224"}}>Interested in Sponsoring Us</h3>
      <div style={{position:"relative"}}>
      <img src={arrow} width={100} alt="" style={{position:"absolute", left:"-100px",top:"-60px"}} />
      <button className="Sponsor-button">
        <a
          className="sponsor-link"
          href="https://docs.google.com/forms/d/e/1FAIpQLScutHvEcWOPeqLWagnzfEIqeeeSz1_FMe26br62gjd1WiTkrw/viewform?usp=sf_link"
          target="bl
          "
        >
          <span className="sponsor-link">Click here</span>
        </a>
      </button>
      </div>
    </div>
  );
}

export { SponsorsHead, Sponsor, SponsorUS };
