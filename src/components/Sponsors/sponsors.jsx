import { useEffect } from 'react';
import './sponsors.scss';
import Aos from 'aos'
import 'aos/dist/aos.css'

function SponsorsHead() {
  useEffect(()=>{
    Aos.init({duration:1200})
  },[])
  return <h1 data-aos="zoom-in" data-aos-anchor-placement="top-bottom" data-aos-duaration="800" className="shead">Past Sponsors & Partners</h1>;
}

function Sponsor(props) {
  useEffect(()=>{
    Aos.init({duration:1200})
  },[])
  return (
    <div data-aos="zoom-in" data-aos-anchor-placement="top-bottom" className="Sponsor">
      <img src={props} alt="InnoHacks"></img>
    </div>
  );
}

function SponsorUS() {
  return (
    <div className="joinT sponsorUS">
      <h3>Interested in Sponsoring Us</h3>
        {/* <Btn className="sponsor_btn" type="Sponsor us" overlay="Send a mail" /> */}
        <button className="Sponsor-button">
          <a className='sponsor-link'  href="https://docs.google.com/forms/d/e/1FAIpQLScutHvEcWOPeqLWagnzfEIqeeeSz1_FMe26br62gjd1WiTkrw/viewform?usp=sf_link" target='bl
          '>
            <span className='sponsor-link'>Click here</span>
          </a>
        </button>

    </div>
  );
}

export {SponsorsHead, Sponsor, SponsorUS};
