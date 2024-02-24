import React from "react";
import "./style.scss";
import one from "./assets/1.jpg"
import two from "./assets/2.jpg"
import three from "./assets/3.jpg"
import four from "./assets/4.jpg"
import five from "./assets/5.jpg"

export default function PastWinner() {
  return (
    <div className="past-winner-container">
       <div className="left">
        <div className="gallery">
          <img
            src={one}
            alt=""
          />
          <img
            src={two}
            alt=""
          />
          <img
            src={three}
            alt=""
          />
          <img
            src={four}
            alt=""
          />
          <img
            src={five}
            alt=""
          />
        </div>
      </div>

      {/* right */}
      <div className="right">
        <h1 className="glimpses-heading">Past Edition</h1>
        <p className="glimpses-text">
        InnoHacks, the largest code fest of Delhi-NCR, has seen some remarkable past winners who have left their mark on the event's legacy. These talented individuals have showcased their innovation, creativity, and technical prowess, rising above challenges to claim victory in their respective categories. With their groundbreaking hacks, they have not only won prestigious accolades but have also inspired others to push the boundaries of technology.
        </p>
      </div>
     
    </div>
  );
}
