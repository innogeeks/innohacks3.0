import { UseMedia } from "hooks/useMedia";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "aos/dist/aos.css";
import "./about.css";

// components
import {
  CommunityPartner,
  Logo,
  LogoSectionAbout,
} from "../../components/About/index.jsx";
import { Accordion } from "../../components/Accordian/index.jsx";
import Birds from "../../components/Animation";
import Footer from "../../components/Footer/index.jsx";
import Schedule from "components/Schedule/schedule.jsx";
import Footfall from "components/Footfall/footfall.jsx";
import { Myinfo } from "../../components/Landing/index.jsx";
import { PrizeHeading, ThemePrize } from "../../components/Prizes/index.jsx";
import Media from "../../components/Socials/index.jsx";
import {
  SponsorsHead,
  SponsorUS,
} from "../../components/Sponsors/sponsors.jsx";
import { Member } from "../../components/Team";
import {
  frequentlyAskedQuestions,
  Themeinfo,
  titleSponsor,
  platinumSponsor,
  goldSponsor,
  silverSponsor,
  educationSponsor,
  certificateSponsor,
  TeamInfo,
} from "../../Module/General";
import PastWinner from "components/pastWinners/index.jsx";
import Map from "components/map/index.jsx";
import Organiser from "components/organisers/Organiser.jsx";

const PrizeGroup = (props, index) => {
  return (
    <Row className="theme-container" key={index}>
      {props.map((s, i) => (
        <Col key={i} className="" sm={12} lg={4} md={4}>
          <ThemePrize i={i} icon={s.icon} type={s.type} content={s.content} />
        </Col>
      ))}
    </Row>
  );
};

const TeamMembers = (props, index) => {
  return (
    <Row key={index} className="members">
      {props.map((s, i) => (
        <Col key={i} className="" sm={12} lg={4} md={4}>
          <Member info={s} />
        </Col>
      ))}
    </Row>
  );
};

const FrequentlyAsked = (props, index) => {
  return (
    <Row key={index} className="sf">
      {props.map((s, i) => (
        <Col key={i} sm={12} lg={6} md={6}>
          <Accordion panels={s} />
        </Col>
      ))}
    </Row>
  );
};

export default function HomePage() {
  const [media, setMedia] = useState();
  UseMedia("min-width", 1000, setMedia);

  return (
    <div className="Whole_div">
      <div className="color_sectiom" id="home">
        <Container fluid>
          <Row className="Row info">
            <Col className="info-div" sm={12} lg={7} md={7}>
              <Myinfo />
            </Col>
            <Col className="contain">
              <img
                className="imagee"
                src={
                  "https://s3.ap-south-1.amazonaws.com/innohacks3.0/innohacks3.0+logo.png"
                }
                style={{ width: "470px" }}
              ></img>
            </Col>
          </Row>
          <Row className="mediaInfo">
            <Col className="" sm={12} lg={12} md={12}>
              <Media />
            </Col>
          </Row>
        </Container>
      </div>
      <Container fluid>
        <Row className=" logoSection" >
          <Col className="info-div">
            <LogoSectionAbout />
          </Col>
          <Col className="info-div">
            <Logo />
          </Col>
          <Col></Col>
        </Row>
        <Row className="mediaInfo" >
          <Col className="" sm={12} lg={12} md={12}>
            <h1
              data-aos="zoom-in"
              data-aos-duration="800"
              id="prizes"
              className="prize_heading"
              style={{ fontFamily: "repo-bold", marginBottom: "10rem"  }}
            >
              Past Statistics
            </h1>
            <Footfall />
          </Col>
        </Row>
        {/* {media && <Birds top="120vh" left="0vh" type="" />} */}
        <h1
          data-aos="zoom-in"
          data-aos-duration="800"
          id="prizes"
          className="prize_heading"
          style={{ fontFamily: "repo-bold" }}
        >
          Prizes
        </h1>
        <div className="prizepool">
          <p
            data-aos="zoom-in"
            data-aos-duration="800"
            id="prizes"
            className="worth"
          >
            worth
          </p>
          <h4
            data-aos="zoom-in"
            data-aos-duration="800"
            id="prizes"
            className="prizee"
            style={{ fontFamily: "poppins" }}
          >
            ₹ 1.25 L
          </h4>
        </div>
        <Row
          className="prizesection"
          style={{
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: "5vh",
          }}
        >
          <div className="cards_prizes">
            <div className="reverse">
              <div data-aos="fade-up" className="cardone cards_">
                <div className="bg">
                  <img
                    src={
                      "https://s3.ap-south-1.amazonaws.com/innohacks3.0/prizes/2.png"
                    }
                    alt=""
                  />
                  <div className="text_prizes">
                    <p style={{ textShadow: "1px 1px 4px #702963" }}>₹ 30K</p>
                    <p>+</p>
                    <p>
                      Innohacks <br />
                      swags, t-shirts, stickers.
                    </p>
                  </div>
                </div>
                <div className="blob"> </div>
              </div>
              <div data-aos="fade-up" className="cardtwo cards_">
                <div className="bg">
                  <img
                    src={
                      "https://s3.ap-south-1.amazonaws.com/innohacks3.0/prizes/1.png"
                    }
                    width={200}
                    alt=""
                  />
                  <div className="text_prizes">
                    <p
                      style={{
                        fontSize: "35px",
                        textShadow: "1px 1px 4px #702963",
                      }}
                    >
                      ₹ 50k
                    </p>
                    <p>+</p>
                    <p>
                      Innohacks <br />
                      swags, t-shirts, stickers.
                    </p>
                  </div>
                </div>
                <div className="blob"></div>
              </div>
            </div>
            <div data-aos="fade-up" className="cardthree cards_">
              <div className="bg">
                <img
                  src={
                    "https://s3.ap-south-1.amazonaws.com/innohacks3.0/prizes/3.png"
                  }
                  width={150}
                  alt=""
                />
                <div className="text_prizes">
                  <p style={{ textShadow: "1px 1px 4px #702963" }}>₹ 20k</p>
                  <p>+</p>
                  <p>
                    Innohacks <br />
                    swags, t-shirts, stickers.
                  </p>
                </div>
              </div>
              <div className="blob"></div>
            </div>
          </div>
          <h1
          data-aos="zoom-in"
          data-aos-duration="800"
          id="prizes"
          className="prize_heading"
          style={{ fontFamily: "repo-bold" }}
        >
        Tracks and Prizes
        </h1>
          <div className="more_prizes">
            
            <div data-aos="fade-left" className="more-one">
              <img
                className="gif_prize "
                src={
                  "https://s3.ap-south-1.amazonaws.com/innohacks3.0/prizes/xr.gif"
                }
              ></img>
              <p className="more-title">Best Use of XR</p>
            </div>
            <div data-aos="fade-right" className="more-one">
              <img
                className="gif_prize "
                src={
                  "https://s3.ap-south-1.amazonaws.com/innohacks3.0/prizes/blockchain.gif"
                }
              ></img>
              <p className="more-title">Best Use of Blockchain</p>
            </div>
            <div data-aos="fade-left" className="more-one">
              <img
                className="gif_prize "
                src={
                  "https://s3.ap-south-1.amazonaws.com/innohacks3.0/prizes/aiIOT.gif"
                }
              ></img>
              <p className="more-title">Best Use of AIoT</p>
            </div>
            <div data-aos="fade-right" className="more-one">
              <img
                className="gif_prize "
                src={
                  "https://s3.ap-south-1.amazonaws.com/innohacks3.0/prizes/social.gif"
                }
              ></img>
              <div>
                <div>
                  <p className="more-title">Most Socially impactful Hack</p>
                </div>
              </div>
            </div>
            <div data-aos="fade-left" className="more-one">
              <img
                className="gif_prize "
                src={
                  "https://s3.ap-south-1.amazonaws.com/innohacks3.0/prizes/girl.gif"
                }
              ></img>
              <p className="more-title">Best All Girl Team</p>
            </div>
          </div>
        </Row>
        {/* ********Prizes ending here ***** */}

        {/* themes */}
        <Row className="prizesection" id="themes">
          
          <PrizeHeading
            data-aos="zoom-in"
            data-aos-duration="800"
            type="Our Themes"
          />
          {Themeinfo.map(PrizeGroup)}
        </Row>
        {/* Theme end */}

        {/* Schedule here */}
        <Row className="schedule PrizeHeading" id="timeline">
          <h1
            className="Schedule-heading"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            Schedule
          </h1>
          {/* <Schedule /> */}
          <div class="image-container">
       
  <img src="https://s3.ap-south-1.amazonaws.com/innohacks3.0/mobileviewupdated.png" alt="" className="mobile-image"/>
  <img src="https://s3.ap-south-1.amazonaws.com/innohacks3.0/Copy+of+Copy+of+Innohacks+3.0+brochure+(2)+(1).png" alt="" className="laptop-image"/>
</div>

        </Row>
        {/* Schedule section ends here */}

        {/* ********Sponsors here ***** */}
        <Row className="sponsorSection" id="sponsors">
          <SponsorsHead />
          <SponsorUS />
          <div className="sponsor-grid">
            <div>

              <p className="more-title-sponsor">Title sponsor</p>
              {titleSponsor.map((item, i) => (
                <Col
                  data-aos="fade-left"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="200"
                  key={i}
                  className="sponsor-logos"
                  sm={12}
                  lg={4}
                  md={6}
                >
                  <div className="sponsor-bg">
                    <img src={item.src} width={200} alt="" />
                  </div>
                </Col>
              ))}
            </div>
            <div>
              <p className="more-title-sponsor">Education Sponsor</p>
              {educationSponsor.map((item, i) => (
                <Col
                  data-aos="fade-left"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="200"
                  key={i}
                  className="sponsor-logos"
                  sm={12}
                  lg={4}
                  md={6}
                >
                  <div className="sponsor-bg">
                    <img src={item.src} width={200} alt="" />
                  </div>
                </Col>
              ))}
            </div>
            <div>
              <p className="more-title-sponsor">Certificate Sponsor</p>
              {certificateSponsor.map((item, i) => (
                <Col
                  data-aos="fade-left"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="200"
                  key={i}
                  className="sponsor-logos"
                  sm={12}
                  lg={4}
                  md={6}
                >
                  <div className="sponsor-bg">
                    <img src={item.src} width={180} alt="" />
                  </div>
                </Col>
              ))}
            </div>
            <div>
              <p className="more-title-sponsor">Platinum Sponsor</p>
              {platinumSponsor.map((item, i) => (
                <Col
                  data-aos="fade-left"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="200"
                  key={i}
                  className="sponsor-logos"
                  sm={12}
                  lg={4}
                  md={6}
                >
                  <div className="sponsor-bg">
                    <img src={item.src} width={180} alt="" />
                  </div>
                </Col>
              ))}
            </div>
            <div>
              <p className="more-title-sponsor">Gold Sponsor</p>
              {goldSponsor.map((item, i) => (
                <Col
                  data-aos="fade-left"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="200"
                  key={i}
                  className="sponsor-logos"
                  sm={12}
                  lg={4}
                  md={6}
                >
                  <div className="sponsor-bg">
                    <img src={item.src} width={180} alt="" />
                  </div>
                </Col>
              ))}
            </div>
            <div>
              <p className="more-title-sponsor">Silver Sponsor</p>
              <div className="more-title-sponsor-silver">
                {silverSponsor.map((item, i) => (
                  <Col key={i} className="sponsor-logos" sm={12} lg={4} md={6}>
                    <div className="sponsor-bg">
                      <img src={item.src} width={180} alt="" />
                    </div>
                  </Col>
                ))}
              </div>
            </div>
          </div>
        </Row>
        {/* ********Sponsors ending here ***** */}

        {/* Judges start */}
        <div id="judges">
          <h1 className="title_community">Past Speakers and Judges</h1>
        </div>
        {TeamInfo.map(TeamMembers)}
        {/* Judges End */}

        {/* Community partners */}
        <Row>
          <CommunityPartner />
        </Row>
        {/* Cumminity partners End */}

        {/* past winners */}
        <Row>
          <PastWinner />
        </Row>
        {/* past Winners End */}

        {/* organizing Team */}
        <Row>
          <Organiser />
        </Row>
        {/* Organizing team End */}

        {/* ********Frequently asked Questions here ***** */}
        <div className="Myfaqs" id="faq">
          <h1 className="my-faq-head">FAQs</h1>
          {frequentlyAskedQuestions.map(FrequentlyAsked)}
        </div>
        {/* FAQ Ends */}

        {/* Map */}
        <Row className="homepage-map PrizeHeading">
          <h1>How to Reach ?</h1>
          <Map />
        </Row>
        {/* Map End */}

        {/* Footer */}
      </Container>
      <Footer />
      {/* Footer End */}
    </div>
  );
}
