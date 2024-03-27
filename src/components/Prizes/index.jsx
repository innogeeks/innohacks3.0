import {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './style.scss';

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
export {FirstPrize, PrizeHeading,ThemePrize};
