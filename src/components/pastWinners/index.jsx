import React from "react";
import "./style.scss";

export default function PastWinner() {
  return (
    <div className="past-winner-container">
       <div className="left">
        <div class="gallery">
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipMH98yyrBwn3fbrT3GBHR3fvIzRgl8oczboHBfO=s1360-w1360-h1020"
            alt=""
          />
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipMH98yyrBwn3fbrT3GBHR3fvIzRgl8oczboHBfO=s1360-w1360-h1020"
            alt=""
          />
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipMH98yyrBwn3fbrT3GBHR3fvIzRgl8oczboHBfO=s1360-w1360-h1020"
            alt=""
          />
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipMH98yyrBwn3fbrT3GBHR3fvIzRgl8oczboHBfO=s1360-w1360-h1020"
            alt=""
          />
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipMH98yyrBwn3fbrT3GBHR3fvIzRgl8oczboHBfO=s1360-w1360-h1020"
            alt=""
          />
        </div>
      </div>

      {/* right */}
      <div className="right">
        <h1 class="glimpses-heading">Past Winners</h1>
        <p className="glimpses-text">
        InnoHacks, the largest code feast of Delhi NCR, has seen some remarkable past winners who have left their mark on the event's legacy. These talented individuals have showcased their innovation, creativity, and technical prowess, rising above challenges to claim victory in their respective categories. With their groundbreaking hacks, they have not only won prestigious accolades but have also inspired others to push the boundaries of technology.
        </p>
      </div>
     
    </div>
  );
}
