import {SOCIALS} from '../../Module/General';
import {Btn} from '../Landing/index.jsx';
import './sponsors.scss';

function SponsorsHead() {
  return <h1 className="shead">Past Sponsors & Partners</h1>;
}

function Sponsor(props) {
  return (
    <div className="Sponsor ">
      <img src={props.srcx} alt="InnoHacks"></img>
    </div>
  );
}

function SponsorUS() {
  return (
    <div className="joinT sponsorUS">
      {/* <h3>Interested in Sponsoring </h3> */}
        {/* <Btn className="sponsor_btn" type="Sponsor us" overlay="Send a mail" /> */}
        <button class="Sponsor-button">
          <a className='sponsor-link'  href={SOCIALS.email}>
            <span>Sponsor Us</span>
          </a>
        </button>
        
    </div>
  );
}

export {SponsorsHead, Sponsor, SponsorUS};
