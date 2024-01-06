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
      <h3>Interested in Sponsoring </h3>
      <a href={SOCIALS.email}>
        {/* <Btn className="sponsor_btn" type="Sponsor us" overlay="Send a mail" /> */}
        <button className="butt">
           Sponsor Us
          <div id="clip">
              <div id="leftTop" class="corner"></div>
              <div id="rightBottom" class="corner"></div>
              <div id="rightTop" class="corner"></div>
              <div id="leftBottom" class="corner"></div>
          </div>
          <span id="rightArrow" class="arrow"></span>
          <span id="leftArrow" class="arrow"></span>
      </button>
      </a>{' '}
    </div>
  );
}

export {SponsorsHead, Sponsor, SponsorUS};
