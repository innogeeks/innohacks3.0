import { SOCIALS, TOP_SECTION } from '../../Module/General';
import MytypedComponent from '../Typed/index.js';
import './style.css';
import { BsDiscord } from "react-icons/bs";
const Btn = props => {
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
    background: 'linear-gradient(to right, #ff0000, #1E78E4)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
  };
  return (
    <div className="AboutMe">
      <h2 >Join <span style={titleStyle} >InnoHacks3.0</span></h2>
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
        {/* <a href={TOP_SECTION.JUDGES_FORM_LINK}>
          {' '}
          <Btn class="sponsor_btn" type="Judges" overlay="Fill the form" />
        </a> */}
        <div className="join_dis">
          <a rel="noreferrer" target="_blank" href={SOCIALS.discord}>
            {/* <Btn
            ico="fab fa-2x fa-discord"
            class="join_disco"
            type="Join Discord"
            overlay="Click the link"
          /> */}
            {/* <button class="animated-button">
              <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                ></path>
              </svg>
              <span class="text">Join Discord</span>
              <span class="circle"></span>
              <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                ></path>
              </svg>
            </button> */}
            <button className='anime-btn'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36 36"
                width="36px"
                height="36px"
              />
                <rect width="36" height="36" x="0" y="0" fill="#fdd835"></rect>
                <BsDiscord className='img' fontSize={50} color='white'/>
              <span class="now">now!</span>
              <span class="play">Join</span>
          </button>

          </a>
        </div>

        <a href='https://forms.gle/LabTKRJEHvyZuXd78'>
          {' '}
          <Btn
            class="register"
            type="Register "
            overlay="Now"
          />
          
        </a>
        {/* <div className='Register_button'>
        <button class="learn-more buttonR">
            <span aria-hidden="true" class="circleR">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">Learn More</span>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export { Btn, Myinfo };
