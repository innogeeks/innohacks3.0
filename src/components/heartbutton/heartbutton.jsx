import React, { useState } from 'react';
import './style.css'; // Import the CSS file

const HeartButton = () => {
//   const [count, setCount] = useState(1);

//   const handleButtonClick = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div className="container">
//       <div className="heart" id="heart-button" onClick={handleButtonClick}>
//         {/* <span className="counter">{count}</span> */}
//         <i className="fa fa-heart">{count}</i>
//       </div>
//     </div>

const increaseCount = () => {
    fetch('http://localhost:3001/api/increment')
      .then(response => response.json())
      .then(data => setCount(data.count))
      .catch(error => console.error('Error:', error));
  };


const [count, setCount] = useState('');

// const increaseCount = () => {
//   setCount(count + 1);
// };

return (
  <div>

    <div className="heart" id="heart-button">
    <button onClick={increaseCount} >
  <i className="fa fa-heart" ></i>&nbsp;{count}
</button>
    </div>
  </div>
  );
};

export default HeartButton;
