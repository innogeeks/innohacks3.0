import './style.css';
import { BsHeadsetVr } from "react-icons/bs";
import { FaGlobeAmericas } from "react-icons/fa";
import 'aos/dist/aos.css'

// images
import algos from './img/algocs.png';
import gdsc from './img/gdsc.png';
import iosc from './img/iosc.png';

import {MIDDLE_SECTION} from '../../Module/General';


function LogoSectionAbout() {
  return (
    <div className="LogoSectionAbout"  >
      {/* <BsHeadsetVr fontSize={200} className='arHeadset'/>
      <FaGlobeAmericas fontSize={200} className='globe'/> */}
      <h1>{MIDDLE_SECTION.TITLE}</h1>
      <p className='long desc'>{MIDDLE_SECTION.LONG_DESCRIPTION}</p>
      
    </div>
  );
}

function Logo() {
  return (
      <img className="Logo-about" src={MIDDLE_SECTION.LOGO}  alt="Innohacks" />
  );
}

function CommunityPartner() {

  return(
    <div className="community-partner" >
    <h1 className="title_community" >Community Partners</h1>
    <div className="community_logo_container" >
      <div className='logo-community' style={{color: 'white', textAlign: 'center', margin: "0 5% 2% 5%"}}>
        <img src={iosc} className="iosc_logo" width="100%" alt="" />
        <p >IOSC</p>
      </div>
      <div className='logo-community' style={{color: 'white', textAlign: 'center', margin: '0 5% 2% 5%'}}>
        <img src={gdsc} className="iosc_logo" width="100%" alt=""/>
        <p >GDSC-ABESEC</p>
      </div>
      <div  className='logo-community' style={{color: 'white', textAlign: 'center', margin: '0 5% 2% 5%'}}>
        <img src={algos} className="iosc_logo" width="100%" alt=""/>
        <p >ALGOCS</p>
       </div>
    </div>
  </div>

  );
}

export {Logo, LogoSectionAbout, CommunityPartner};
