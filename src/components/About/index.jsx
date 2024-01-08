import './style.css';
import algos from './img/algocs.png';
import gdsc from './img/gdsc.png';
import iosc from './img/iosc.png';

import {MIDDLE_SECTION} from '../../Module/General';

function LogoSectionAbout() {
  return (
    <div className="LogoSectionAbout">
      <h1>{MIDDLE_SECTION.TITLE}</h1>
      <p>{MIDDLE_SECTION.LONG_DESCRIPTION}</p>
    </div>
  );
}

function Logo() {
  return (
    <div className="logoS">
      <img className="Logo" src={MIDDLE_SECTION.LOGO} alt="Innohacks" />
    </div>
  );
}

function CommunityPartner() {
  return(
    <div className="community-partner">
    <h1 className="title" style={{marginBottom:'5%', marginTop:'6%', fontWeight:'bolder'}}>Community Partner</h1>
    <div className="" style={{display: 'flex',  justifyContent: 'center', flexWrap: 'wrap',marginBottom:'6%'}}>
      <div style={{color: 'white', textAlign: 'center', margin: "0 5% 2% 5%"}}>
        <img src={iosc} className="iosc_logo" width="200" alt=""/>
        <p style={{fontFamily: 'cursive', color:'black', fontWeight:'bold'}}>IOSC</p>
      </div>
      <div style={{color: 'white', textAlign: 'center', margin: '0 5% 2% 5%'}}>
        <img src={gdsc} className="iosc_logo" width="200" alt=""/>
        <p style={{fontFamily: 'cursive', color:'black', fontWeight:'bold'}}>GDSC-ABESEC</p>
      </div>
      <div style={{color: 'white', textAlign: 'center', margin: '0 5% 2% 5%'}}>
        <img src={algos} className="iosc_logo" width="200" alt=""/>
        <p style={{fontFamily: 'cursive', color:'black', fontWeight:'bold'}}>ALGOCS</p>
       </div>
    </div>
  </div>

  );
}

export {Logo, LogoSectionAbout, CommunityPartner};
