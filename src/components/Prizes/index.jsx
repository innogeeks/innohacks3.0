import {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './style.scss';

function PrizeHeading(props) {
  useEffect(()=>{
    Aos.init({duration:1200})
  },[])

  return (
    <div data-aos="fade-up" data-aos-duaration="800"  className="PrizeHeading">
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

export {FirstPrize, PrizeHeading};
