import { useEffect, useState } from 'react';
import { FOOTER, SOCIALS, TOP_SECTION } from '../../Module/General';
// import cross from './assets/cross.svg';
// import {Btn} from '../Landing/index.jsx';
// import DevPost from './assets/icons8-dev-post.svg';
// import Dis from './assets/icons8-discord.svg';
// import Insta from './assets/icons8-instagram.svg';
// import Linked from './assets/icons8-linkedin-2.svg';
// import Mail from './assets/icons8-mail.svg';
// import Twitter from './assets/icons8-twitter.svg';
// import PrivacyPolicy from './assets/Privacy policy.pdf';
// import TermsOfUse from './assets/Terms of use.pdf';
import { FaInstagram } from "react-icons/fa6";
import { BiLogoDiscordAlt } from "react-icons/bi";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoTwitter } from "react-icons/io";
import logo from './assets/InnohacksFullLogo.png'
import Innologo from './assets/logo.png'
import { HashLink } from 'react-router-hash-link';
//------------------------------------------------------------------
import './style.scss';

const GithubTemplate = ({ hideTemplate }) => {
  return (
    <div className="template">
      <div className="template-left">
        <p>
          Join us to{' '}
          <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>Gear Up</a>,
          where we will be hosting PUBLIC workshops, tech talks, panel
          discussions, and career sessions!
        </p>
      </div>
      <img onClick={hideTemplate} src={cross} />
    </div>
  );
};

const Footer = () => {
  // const [template, setTemplate] = useState(false);
  // const [viewTemplate, setViewTemplate] = useState(true);

  // useEffect(() => {
  //   window.addEventListener('scroll', listenScrollEvent);

  //   return () => {
  //     window.removeEventListener('scroll', listenScrollEvent);
  //   };
  // }, []);

  // const listenScrollEvent = e => {
  //   if (window.scrollY > 2800) setTemplate(true);
  //   else if (window.scrollY < 2800) setTemplate(false);
  // };

  return (
    <div className="footer" >
      <div className='main-footer'>
        <div className="Register_a">
          <button class="register-button">

            <a smooth className='register-link' href='https://forms.gle/LabTKRJEHvyZuXd78' target='_blank'>
              <span>Register Now</span>
            </a>
          </button>
        </div>
        <div className='social-links'>
          <span className="single" >
            <a rel="noreferrer " target="_blank" href={SOCIALS.instagram}  >
              <FaInstagram fontSize={40} className='redBlue1' />
            </a>
          </span>
          <span className="single">
            <a rel="noreferrer" target="_blank" href={SOCIALS.discord}>
              <BiLogoDiscordAlt fontSize={40} className='redBlue2' />
            </a>
          </span>
          <span className="single">
            <a rel="noreferrer" target="_blank" href={SOCIALS.linkedin}>
              <CiLinkedin fontSize={40} className='redBlue3' />
            </a>
          </span>
          <span className="single">
            <a rel="noreferrer" target="_blank" href={SOCIALS.twitter}>
              <IoLogoTwitter fontSize={40} className='redBlue4' />
            </a>
          </span>
        </div>
      </div>
      <div className="footer-logo">
        <div>
          <HashLink className="footer-logo-link" to="#" smooth>
            <img src={logo} width={"100%"} alt="" />
          </HashLink>
        </div>
        <div>
        <a className="footer-logo-link" href="https://innogeeks.in/" target='_blank'>
          <img src={Innologo} width={"100%"} alt="" />
        </a>
        </div>
      </div>
      <div className="footer-team">
        <h4>❤️Design by Team-INNOGEEKS💙 </h4>
        <p>©2024 Innogeeks™</p>
        <p><a href="mailto:innogeeks@kiet.edu">Contact us @Innogeeks™</a></p>
      </div>
    </div>

  );
};

export default Footer;
