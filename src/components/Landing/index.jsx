import { TOP_SECTION } from "../../Module/General";
import MytypedComponent from "../Typed/index.js";
import "./style.css";

const Btn = (props) => {
  return (
    <button className={props.class}>
      <i className={props.ico}></i>
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
  return (
    <div className="Myinfo">
      <About />
      <p> {TOP_SECTION.SHORT_DESCRIPTION}</p>
      <div className="buttom-group">
        <div className="join_dis">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://discord.gg/qNmEeAsuqQ"
          >
            <Btn
              ico="fab fa-2x fa-discord"
              className="join_disco"
              type="&nbsp;&nbsp;Join Discord"
              overlay="Now"
              style={{ display: "flex", justifyContent: "center" }}
            />
          </a>
        </div>

        <a href="https://forms.gle/LabTKRJEHvyZuXd78" target="_blank">
          {" "}
          <Btn className="register" type="Register " overlay="Now" />
        </a>
      </div>
    </div>
  );
};

export { Btn, Myinfo };
