import "./schedule.css";
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
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
          src="https://s3.ap-south-1.amazonaws.com/innohacks3.0/mobile_schedule.png"
          alt=""
          className="mobile-image"
          data-aos="fade-right"
        />
        <img
          src="https://s3.ap-south-1.amazonaws.com/innohacks3.0/schedule.png"
          alt=""
          className="laptop-image"
          data-aos="fade-right"
        />
      </div>
    </>
  );
};

export default Schedule;
