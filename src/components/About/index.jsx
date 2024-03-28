import "./style.css";
import { BsHeadsetVr } from "react-icons/bs";
import { FaGlobeAmericas } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

// images
import algos from "./img/algocs.png";
import gdsc from "./img/gdsc.png";
import iosc from "./img/iosc.png";

import { MIDDLE_SECTION } from "../../Module/General";
import { useEffect } from "react";

function LogoSectionAbout() {
  useEffect(() => {
    Aos.init({ duration: 400 });
  }, []);
  return (
    <div className="LogoSectionAbout" data-aos="fade-right">
      {/* <BsHeadsetVr fontSize={200} className='arHeadset'/>
      <FaGlobeAmericas fontSize={200} className='globe'/> */}
      <h1>{MIDDLE_SECTION.TITLE}</h1>
      <div>
        <p className="long-desc">
          The largest code fest of Delhi-NCR is back! ⚡<br />
          Join this 24-Hour Hackathon to hustle and shine through 5 amazing
          tracks, Embark on an Odyssey to learn new technologies, seek guidance
          from experienced mentors and engrave your name on the boards of our
          esteemed Judges.
          <br />
          Witness prodigious Speakers of the Nation live! ✨<br />
          Not just that, win huge prizes and hampers by brainstorming and
          creating the best hack!
          <br />
          Be ready to sail through an amazing night of fun, code and much more
          on 28th & 29th April! 💫
        </p>
      </div>
    </div>
  );
}

function Logo() {
  useEffect(() => {
    Aos.init({ duration: 400 });
  }, []);
  return (
    <img
      data-aos="fade-left"
      className="Logo-about"
      src={MIDDLE_SECTION.LOGO}
      alt="Innohacks"
    />
  );
}

function CommunityPartner() {
  useEffect(() => {
    Aos.init({ duration: 400 });
  }, []);
  return (
    <div className="community-partner">
      <h1
        className="title_community"
        data-aos="zoom-in"
        data-aos-anchor-placement="top-bottom"
        data-aos-duaration="800"
      >
        Community Partners
      </h1>
      <div className="community_logo_container">
        <div
          className="logo-community"
          data-aos="fade-up"
          style={{ color: "white", textAlign: "center", margin: "0 5% 2% 5%",backgroundColor:"white",borderRadius:"20px",padding:"10px",boxShadow:"10px 10px 60px #49494960 ,inset -10px -10px 40px #ffffff5d" }}
        >
          <img src={iosc} className="iosc_logo" width="100%" alt="" />
          <p style={{fontFamily:"repo-bold", fontSize:"16px"}}>IOSC</p>
        </div>
        <div
          className="logo-community"
          data-aos="fade-up"
          style={{ color: "white", textAlign: "center", margin: "0 5% 2% 5%",backgroundColor:"white",borderRadius:"20px",padding:"10px",boxShadow:"10px 10px 60px #49494960 ,inset -10px -10px 40px #ffffff5d"  }}
        >
          <img src={gdsc} className="iosc_logo" width="100%" alt="" />
          <p style={{fontFamily:"repo-bold", fontSize:"16px"}}>GDSC-ABESEC</p>
        </div>
        <div
          className="logo-community"
          data-aos="fade-up"
          style={{ color: "white", textAlign: "center", margin: "0 5% 2% 5%",backgroundColor:"white",borderRadius:"20px",padding:"10px",boxShadow:"10px 10px 60px #49494960 ,inset -10px -10px 40px #ffffff5d" }}
        >
          <img src={algos} className="iosc_logo" width="100%" alt="" />
          <p style={{fontFamily:"repo-bold", fontSize:"16px"}}>ALGOCS</p>
        </div>
      </div>
    </div>
  );
}

export { Logo, LogoSectionAbout, CommunityPartner };
