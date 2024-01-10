import './sponsors.scss';

function SponsorsHead() {
  return <h1 className="shead">Past Sponsors & Partners</h1>;
}

function Sponsor(props) {
  return (
    <div className="Sponsor ">
      <img src={props} alt="InnoHacks"></img>
    </div>
  );
}

function SponsorUS() {
  return (
    <div className="joinT sponsorUS">
      <h3>Interested in Sponsoring. Click Below 👇</h3>
        {/* <Btn className="sponsor_btn" type="Sponsor us" overlay="Send a mail" /> */}
        <button class="Sponsor-button">
          <a className='sponsor-link'  href="https://docs.google.com/forms/d/e/1FAIpQLScutHvEcWOPeqLWagnzfEIqeeeSz1_FMe26br62gjd1WiTkrw/viewform?usp=sf_link" target='bl
          '>
            <span>Sponsor Us</span>
          </a>
        </button>

    </div>
  );
}

export {SponsorsHead, Sponsor, SponsorUS};
