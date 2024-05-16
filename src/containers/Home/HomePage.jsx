import { UseMedia } from "hooks/useMedia";
import { useEffect, useState } from "react";
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
import Footer from "../../components/Footer/index.jsx";
import Schedule from "components/Schedule/schedule.jsx";
import Footfall from "components/Footfall/footfall.jsx";
import { Myinfo } from "../../components/Landing/index.jsx";
import { PrizeHeading, ThemePrize, TrackPrize} from "../../components/Prizes/index.jsx";
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
  associateSponsor,
  merchandiseSponsor,
  hiringSponsor,
  hostingPartner,
  JudgeInfo,
  TeamInfo,
  MentorInfo
} from "../../Module/General";
// import PastWinner from "components/pastWinners/index.jsx";
import Map from "components/map/index.jsx";
import Organiser from "components/organisers/Organiser.jsx";
import PastEdition from "components/PastEdition";
import Aos from "aos";
import "aos/dist/aos.css";
import prize1 from "components/Prizes/assests/PRIZES (4).png";
import prize2 from "components/Prizes/assests/PRIZES (5).png";
import prize3 from "components/Prizes/assests/PRIZES (6).png";

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
          <Member info={s}/>
        </Col>
      ))}
    </Row>
  );
};

const MentorMembers = (props, index) => {
  return (
    <Row key={index} className="members">
      {props.map((s, i) => (
        <Col key={i} className="" sm={12} lg={4} md={4}>
          <Member info={s}/>
        </Col>
      ))}
    </Row>
  );
};
const FrequentlyAsked = (props, index) => {
  return (
    <Row key={index} className="sf">
      {props.map((s, i) => (
        <Col
          key={i}
          sm={12}
          lg={6}
          md={6}
        >
          <Accordion panels={s} />
        </Col>
      ))}
    </Row>
  );
};

export default function HomePage() {
  useEffect(() => {
    Aos.init({ duration: 400 });
  }, []);

  const [media, setMedia] = useState();
  UseMedia("min-width", 1000, setMedia);

  return (
    <div className="Whole_div">
      <div className="color_sectiom" id="home">
        <Container fluid>
          <Row className="Row info">
            <Col
              className="info-div"
              sm={12}
              lg={7}
              md={7}
            >
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
        <Row className=" logoSection">
          <Col className="info-div">
            <LogoSectionAbout />
          </Col>
          <Col className="info-div">
            <Logo />
          </Col>
          <Col></Col>
        </Row>
        <Row className="mediaInfo">
          <Col className="" sm={12} lg={12} md={12}>
            <h1
              data-aos="zoom-in"
              data-aos-duration="800"
              id="prizes"
              className="prize_heading"
              style={{ fontFamily: "repo-bold", marginBottom: "10rem" }}
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
          style={{ fontFamily: "repo-bold", marginTop: "100px" }}
        >
          Prizes
        </h1>
        <div className="prizepool">
          <p
            data-aos="zoom-in"
            data-aos-duration="800"
            id="prizes"
            className="worth"
            style={{alignItems:"center"}}
          >
            Prize Pool Worth
          </p>
          <p
            data-aos="zoom-in"
            data-aos-duration="800"
            className="prizee"
          >
            ₹15Lakh
          </p>
        </div>
        <div className="prizepool">
        <div data-aos="zoom-in"
            data-aos-duration="800"
            id="prizes"
            className="worthHeading">
        (Potential seed funding of ₹10 lakh+ from Technology Business Incubator - KIET)
        </div>
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
                  {/* <img
                    src={
                      "https://s3.ap-south-1.amazonaws.com/innohacks3.0/prizes/2.png"
                    }
                    alt=""
                  />
                  <div className="text_prizes">
                    <p style={{ textShadow: "1px 1px 4px #06697b" }} className="money">₹ 30K</p>
                    <p>+</p>
                    <p>
                      Innohacks <br />
                      swags, t-shirts, stickers.
                    </p>
                  </div> */}
                  <img src={prize2}></img>
                </div>
                <div className="blob"> </div>
              </div>
              <div data-aos="fade-up" className="cardtwo cards_">
                <div className="bg">
                  {/* <img
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
                        textShadow: "1px 1px 4px #06697b",
                      }}
                      className="money"
                    >
                      ₹ 50k
                    </p>
                    <p>+</p>
                    <p>
                      Innohacks <br />
                      swags, t-shirts, stickers.
                    </p>
                  </div> */}
                  <img src={prize1}></img>
                </div>
                <div className="blob"></div>
              </div>
            </div>
            <div data-aos="fade-up" className="cardthree cards_">
              <div className="bg">
                {/* <img
                  src={
                    "https://s3.ap-south-1.amazonaws.com/innohacks3.0/prizes/3.png"
                  }
                  width={150}
                  alt=""
                />
                <div className="text_prizes">
                  <p style={{ textShadow: "1px 1px 4px #06697b" }} className="money">₹ 20k</p>
                  <p>+</p>
                  <p>
                    Innohacks <br />
                    swags, t-shirts, stickers.
                  </p>
                </div> */}
                <img src={prize3}></img>
              </div>
              <div className="blob"></div>
            </div>
          </div>
          <h1
            data-aos="zoom-in"
            data-aos-duration="800"
            id="prizes"
            className="prize_heading"
            style={{ fontFamily: "repo-bold", marginTop: "100px" }}
          >
            Track Prizes
          </h1>
          <div className="more_prizes">
            {/* <div data-aos="fade-left" className="more-one"> */}
              {/* <img
                className="gif_prize "
                src={
                  "https://s3.ap-south-1.amazonaws.com/innohacks3.0/prizes/xr.gif"
                }
              ></img>
              <p className="more-title" style={{ fontFamily: "repo-light" }}>
                Best Use of XR
              </p> */}


<div data-aos="fade-right" className="more-one">
<div class="card">
  <div class="top-section">
    {/* <div class="border"></div> */}
    <img src="https://s3.ap-south-1.amazonaws.com/innohacks3.0/tee_20240406_201109_0000+(1).png" className="image"></img>
  </div>
  <div class="bottom-section">
    <span class="title" style={{ fontFamily: "repo-light" }}>The most innovative post and project will win Goodies and Swags worth INR 5,000 (Exclusive Innohacks Swag Kit and the coveted Inovact Social Swag Kit).  Don't miss out on the chance to shine and connect with a vibrant community of students, entrepreneurs, and mentors. Let's innovate together at Inovact Social. 
</span>
      <a href="https://docs.google.com/document/d/1Xl8mrO0rEnVbkmGwVYwOm9PZTDJofFrvAZKqonB_C-Q/edit?usp=sharing" style={{textDecoration: 'none'}} target="_blank"><button className="butt">Problem Statement</button></a>
  </div>
</div>
</div>

<div data-aos="fade-left" className="more-one">
<div class="card" id="card2">
  <div class="top-section">
    <div class="border"></div>
    <img src="https://s3.ap-south-1.amazonaws.com/innohacks3.0/tee+(1).png" className="image2"></img>
  </div>
  <div class="bottom-section">
    <span class="title" style={{ fontFamily: "repo-light" }}>Take a journey of creativity with Idea Forage creativity! Create a pioneering virtual reality (VR) simulation for breathing exercises and you may win exclusive swags worth INR 5,000 along with internship opportunity. Join our dynamic community of students, entrepreneurs, and mentors as we shine and revolutionise wellness together. 
</span>
<div style={{display: "flex"}}>
<a href="https://drive.google.com/file/d/1xSYFH_CuEBA0Sts8Ts0zoAzy86AH7gN2/view?usp=sharing" style={{textDecoration: 'none'}} target="_blank"><button className="butt" style={{margin: "10px 5px 5px 15px"}}>Problem Statement 1</button></a>
      <a href="https://drive.google.com/file/d/1-WW2hPCjH6Vk3t64Bx4kGXH5kg9Q47ME/view?usp=sharing" style={{textDecoration: 'none'}} target="_blank"><button className="butt" style={{margin: "10px 5px 5px 25px"}}>Problem Statement 2</button></a>
</div>
  </div>
</div>
</div>

<div data-aos="fade-right" className="more-one">
<div class="card" id="card2">
  <div class="top-section">
    <div class="border"></div>
    <img src="https://s3.ap-south-1.amazonaws.com/innohacks3.0/decoding+draupadi+(1).png" className="image3"></img>
  </div>
  <div class="bottom-section">
    <span class="title" style={{ fontFamily: "repo-light" }}>Join Decoding Draupadi, where diversity thrives! Teams led by women receive preference, fostering inclusivity in our community. Stand a chance to win INR 5,000 Amazon vouchers, plus an internship opportunity, as you interact with a vibrant network of innovators and mentors.
</span>
<a href="https://docs.google.com/document/d/18zXwsdKy95_5kkTMF4YS7kaCPSW-w3Q7W-VPpfaekNY/edit?usp=sharing" style={{textDecoration: 'none'}} target="_blank"><button className="butt" >Problem Statement</button></a>
  </div>
</div>
</div>
<div data-aos="fade-left" className="more-one">
<div class="card" id="card2">
  <div class="top-section">
    <div class="border"></div>
    <img src="https://s3.ap-south-1.amazonaws.com/innohacks3.0/Logo.png" className="image3"></img>
  </div>
  <div class="bottom-section">
    <span class="title" style={{ fontFamily: "repo-light" }}>The objective of this Problem Statement is to design and develop a live streaming platform that enables educational experts to broadcast live sessions, workshops, or lectures to students who have subscribed to the service. The platform should offer features that foster engagement, interaction, and learning among participants.
</span>
<a href="https://docs.google.com/document/d/1l27ZOnpx0yPA_tc_AEcUbH2RHLkUDCgXuoV6_-MtTp4/edit?usp=sharing" style={{textDecoration: 'none'}} target="_blank"><button className="butt" >Problem Statement</button></a>
  </div>
</div>
</div>

            {/* <div data-aos="fade-right" className="more-one">
              <img
                className="gif_prize "
                src={
                  "https://s3.ap-south-1.amazonaws.com/innohacks3.0/prizes/blockchain.gif"
                }
              ></img>
              <p className="more-title" style={{ fontFamily: "repo-light" }}>
                Best Use of Blockchain
              </p>
              </div> */}
            {/*<div data-aos="fade-left" className="more-one">
              <img
                className="gif_prize "
                src={
                  "https://s3.ap-south-1.amazonaws.com/innohacks3.0/prizes/aiIOT.gif"
                }
              ></img>
              <p className="more-title" style={{ fontFamily: "repo-light" }}>
                Best Use of AIoT
              </p>
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
                  <p
                    className="more-title"
                    style={{ fontFamily: "repo-light" }}
                  >
                    Most Socially impactful Hack
                  </p>
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
              <p className="more-title" style={{ fontFamily: "repo-light" }}>
                Best All Girls Team
              </p> */}
            {/* </div> */}
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
        <Row style={{ marginTop: "100px" }}>
          <Schedule />
        </Row>
        {/* Schedule section ends here */}

        {/* ********Sponsors here ***** */}
        <Row className="sponsorSection" id="sponsors">
          <SponsorsHead />
          <div className="sponsor-grid">
            <div>
              <p className="more-title-sponsor" style={{color:"tomato"}}>Title sponsor</p>
              {titleSponsor.map((item, i) => (
                <Col
                  key={i}
                  className="sponsor-logos"
                  sm={12}
                  lg={4}
                  md={6}
                >
                  <div className="sponsor-bg">
                    <img src={item.src} width={200} />
                  </div>
                </Col>
              ))}
            </div>
            <div>
              <p className="more-title-sponsor" style={{color:"#F7418F"}}>Associate Sponsor</p>
              <div className="more-title-sponsor-silver">
                {associateSponsor.map((item, i) => (
                  <Col key={i} className="sponsor-logos" sm={12} lg={4} md={6}>
                    <div className="sponsor-bg">
                      <img src={item.src} width={180} alt="" />
                    </div>
                  </Col>
                ))}
              </div>
            </div>
            <div>
              <p className="more-title-sponsor" style={{color:"#7AA2E3"}}>Hosting Partners</p>
              <div className="more-title-sponsor-silver">
                {hostingPartner.map((item, i) => (
                  <Col key={i} className="sponsor-logos" sm={12} lg={4} md={6}>
                    <div className="sponsor-bg">
                      <img src={item.src} width={180} alt="" />
                    </div>
                  </Col>
                ))}
              </div>
            </div>
            <div>
              <p className="more-title-sponsor" style={{color:"#97E7E1"}}>Merchandise Partners</p>
              <div className="more-title-sponsor-silver">
                {merchandiseSponsor.map((item, i) => (
                  <Col key={i} className="sponsor-logos" sm={12} lg={4} md={6}>
                    <div className="sponsor-bg">
                      <img src={item.src} width={180} alt="" />
                    </div>
                  </Col>
                ))}
              </div>
            </div>
            <div>
              <p className="more-title-sponsor" style={{color:"#FF204E"}}>Hiring Partners</p>
              <div className="more-title-sponsor-silver">
                {hiringSponsor.length!==1 && hiringSponsor.map((item, i) => (
                  <Col key={i} className="sponsor-logos" sm={12} lg={4} md={6}>
                    <div className="sponsor-bg">
                      <img src={item.src} width={180} alt="" />
                    </div>
                  </Col>
                ))}
              </div>
            </div>
            <div>
              <p className="more-title-sponsor" style={{color:"#F7418F"}}>Education Partners</p>
              {educationSponsor.map((item, i) => (
                <Col
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
              <p className="more-title-sponsor" style={{color:"#E5E4E2"}}>Platinum Sponsor</p>
              {platinumSponsor.map((item, i) => (
                <Col
                  key={i}
                  className="sponsor-logos"
                  sm={12}
                  lg={4}
                  md={6}
                >
                  <div className="sponsor-bg">
                    <img src={item.src} width={180} alt="DEVFOLIO LOGO" />
                  </div>
                </Col>
              ))}
            </div>
            <div>
              <p className="more-title-sponsor" style={{color:"gold"}}>Gold Sponsor</p>
              {/* <p>To be declared soon...</p>
               */}
              <div className="more-title-sponsor-silver">
                {silverSponsor.length!==1 && goldSponsor.map((item, i) => (
                  <Col key={i} className="sponsor-logos" sm={12} lg={4} md={6}>
                    <div className="sponsor-bg">
                      <img src={item.src} width={180} alt="" />
                    </div>
                  </Col>
                ))}
              </div>
            </div>
            <div>
              <p className="more-title-sponsor" style={{color:"#C0C0C0"}}>Silver Sponsor</p>
              <div className="more-title-sponsor-silver">
                {silverSponsor.length!==1 && silverSponsor.map((item, i) => (
                  <Col key={i} className="sponsor-logos" sm={12} lg={4} md={6}>
                    <div className="sponsor-bg">
                      <img src={item.src} width={180} alt="" />
                    </div>
                  </Col>
                ))}
              </div>
            </div>
            <div>
              <p className="more-title-sponsor" style={{color:"#535C91"}}>Certificate Partners</p>
              {certificateSponsor.map((item, i) => (
                <Col
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
          </div>
        </Row>
        {/* ********Sponsors ending here ***** */}

        {/* Current Judges start */}
        <div id="judges">
                  <h1
                    className="title_community"
                    data-aos-duration="200"
                    data-aos="zoom-in"
                    data-aos-anchor-placement="top-bottom"
                  >
                     Our Esteemed Judges 
                  </h1>
                </div>
                {JudgeInfo.map(TeamMembers)}
        {/* Current Judges End */}
        <Row><h3>More Reveals Comming Soon...</h3></Row>

        {/* Judges start */}
        {/* <div id="judges">
          <h1
            className="title_community",
            data-aos-duration="300"
            data-aos="zoom-in"
            data-aos-anchor-placement="top-bottom"
          >
            Speakers and Judges
          </h1>
        </div>
        {TeamInfo.map(TeamMembers)} */}
        {/* Judges End */}


        <div id="judges">
          <h1
            className="title_community"
          >
            Mentors
          </h1>
        </div>
        {MentorInfo.map(MentorMembers)}
        {/* Judges End */}
        {/* Community partners */}
        <Row>
          <CommunityPartner />
        </Row>
        {/* Cumminity partners End */}

        {/* Past Edition start*/}
        <Row>
          <PastEdition />
        </Row>
        {/* Past Edition end */}

        {/* past winners */}
        {/* <Row>
          <PastWinner />
        </Row> */}
        {/* past Winners End */}

        {/* organizing Team */}
        <Row>
          <Organiser />
        </Row>
        {/* Organizing team End */}

        {/* ********Frequently asked Questions here ***** */}
        <div className="Myfaqs" id="faq">
          <h1
            className="my-faq-head"
          >
            FAQs
          </h1>
          {frequentlyAskedQuestions.map(FrequentlyAsked)}
        </div>
        {/* FAQ Ends */}

        {/* Map */}
        <Row className="homepage-map PrizeHeading">
          <h1
          >
            How to Reach ?
          </h1>
          <Map />
        </Row>
        {/* Map End */}

        {/* Contact Us */}
        <Row>
          <div className="contact-us-container">
            <h3 >Have more Queries?</h3>
            <a href="mailto:innogeeks@kiet.edu">
            <button>Contact Us</button>
            </a>
          </div>
        </Row>
        {/* Contact Us end */}

        {/* Footer */}
      </Container>
      <Footer />
      {/* Footer End */}
    </div>
  );
}
