import React, { useEffect, useState } from "react";
import "./style.scss";
import one from "./assets/2.jpg";
import two from "./assets/1.jpg";
import three from "./assets/3.jpg";
import four from "./assets/4.jpg";
import five from "./assets/5.jpg";
import six from "./assets/6.jpeg";

function PastEdition() {
  const [mainImage, setMainImage] = useState(one);

  const thumbnails = [one, two, three, four, five, six];

  const handleThumbnailClick = (imageSrc) => {
    setMainImage(imageSrc);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMainImage(thumbnails[Math.floor(Math.random() * 6)]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="past-edition-container">
      <h1 className="past-heading" style={{fontWeight:900, marginTop:"100px",marginBottom:"20px"}}>Past Edition</h1>
      <img src={mainImage} id="main" />
      <div id="thumbnails">
        {thumbnails.map((thumbnail, index) => (
          <img
            key={index}
            src={thumbnail}
            className={`${mainImage === thumbnail ? "scaling" : ""}`}
            onClick={() => handleThumbnailClick(thumbnail)}
          />
        ))}
      </div>
    </div>
  );
}

export default PastEdition;
