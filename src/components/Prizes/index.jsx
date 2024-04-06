import {useEffect} from 'react'
import React, { useState } from 'react';
import { Switch } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';
import Aos from 'aos'
import 'aos/dist/aos.css'
import './style.scss';
import { FormControlLabel, Checkbox } from '@material-ui/core';

function PrizeHeading(props) {
  useEffect(()=>{
    Aos.init({duration:400})
  },[])
  return (
    <div data-aos="fade-up" data-aos-duaration="800"  className="PrizeHeading" id="prize_">
      <h1>{props.type}</h1>
    </div>
  );
}

function FirstPrize(props) {
  return (
    <div  className="Prizes">
      <div className='prize-icons'>{props.icon}</div>
      <h2>{props.type}</h2>
      <p>{props.content}</p>
    </div>
  );
}
function ThemePrize(props){
  return (
    <div  data-aos={props.i%2===0?'fade-left':"fade-right"} data-aos-duaration="800"  className="theme">
      <div className='theme-icons'>{props.icon}</div>
      <h2>{props.type}</h2>
      <p>{props.content}</p>
    </div>
  );
}

function TrackPrize(props){
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return(
    <>
      <FormControlLabel
        control={<Switch checked={isChecked} onChange={handleCheckboxChange} />}
        label="Show"
      />
      <Box sx={{ display: 'flex' }}>
        <Grow in={isChecked}>{ideaforge}</Grow>
        <Grow
          in={isChecked}
          style={{ transformOrigin: '0 0 0' }}
          {...(isChecked ? { timeout: 1000 } : {})}
        >
          {ideaforge}
        </Grow>
      </Box>
    </>
  );
}

export {FirstPrize, PrizeHeading,ThemePrize, TrackPrize};
