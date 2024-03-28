import "./schedule.css";
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
import mobImg from "./assets/Copy of Copy of Innohacks 3.0 brochure (7).png"
import deskImg from"./assets/Copy of Copy of Innohacks 3.0 brochure (6).png"


const Schedule = () => {
  useEffect(()=>{
    Aos.init({duration:400})
  },[])
  return (
    <>
      <div>
        <h1
          data-aos="zoom-in"
          data-aos-duration="800"
          id="prizes"
          className="prize_heading"
          style={{ fontFamily: "repo-bold", marginBottom: "10rem" }}
        >
          Schedule
        </h1>
      </div>

      <div className="image-container">
        <img
          src={mobImg}
          alt=""
          className="mobile-image"
          data-aos="fade-right"
        />
        <img
          src={deskImg}
          alt=""
          className="laptop-image"
          data-aos="fade-right"
        />
      </div>
    </>
  );
};

export default Schedule;
