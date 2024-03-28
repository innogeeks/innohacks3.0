import { TOP_SECTION } from "../../Module/General";
import MytypedComponent from "../Typed/index.js";
import { BiLogoDiscordAlt } from "react-icons/bi";
import "./style.css";
import React from "react";
const Btn = (props) => {
  return (
    <button className={props.class}>
      <i className={props.ico}></i>
      <span style={{margin:"10px"}}>
      <BiLogoDiscordAlt fontSize={32} />
      </span>
      {props.type}
      <div className="overlay">
        <div className="overlay-text">{props.overlay}</div>
      </div>
    </button>
  );
};


const About = () => {
  const titleStyle = {
    background: "linear-gradient(to right, #26feeb, #ffffff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  return (
    <div className="AboutMe">
      <h2>
        <span style={{ fontSize: "3rem" }}>Embrace the challenge</span>
        <br />{" "}
        <span style={titleStyle} className="innohacks-text">
          Innohacks 3.0
        </span>
      </h2>
      <h6 style={{ fontSize: "1.6rem" }}>Hack n' Innovate</h6>
      <MytypedComponent />
    </div>
  );
};

const Myinfo = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className="Myinfo">
      <About />
      <p className="topsection"> {TOP_SECTION.SHORT_DESCRIPTION}</p>
      <div className="buttom-group" style={{display:"flex", flexDirection:"column"}}>
       
       <div
            className="apply-button"
            data-hackathon-slug="innohacks-3"
            data-button-theme="light"
            style={{ height: "44px", width: "312px" }}
          ></div>
<br />
          <div className="registerbtn">
            <a href="https://discord.gg/8c9TrtjqNE" target="_blank">
              {/* <BiLogoDiscordAlt fontSize={30}/> */}
              <Btn className="discord"  type="Discord" overlay="Join Now" />
            </a>
          </div>
       
      </div>
    </div>
  );
};

export { Btn, Myinfo };
