import { UseMedia } from 'hooks/useMedia';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { CommunityPartner, Logo, LogoSectionAbout } from '../../components/About/index.jsx';
import { Accordion } from '../../components/Accordian/index.jsx';
import Birds from '../../components/Animation';
import Footer from '../../components/Footer/index.jsx';
import { Myinfo } from '../../components/Landing/index.jsx';
import { FirstPrize, PrizeHeading } from '../../components/Prizes/index.jsx';
import Media from '../../components/Socials/index.jsx';
import {
  Sponsor,
  SponsorsHead,
  SponsorUS
} from '../../components/Sponsors/sponsors.jsx';
import { JoinTeam, Member } from '../../components/Team';
import {
  FOOTER,
  frequentlyAskedQuestions,
  JudgesInfo,
  Prizeinfo,
  Themeinfo,
  sponsorLogos,
  TeamInfo,
  TOP_SECTION
} from '../../Module/General';
// import MyCalender from '../calender';
import './about.css';
import pattern from './assets/pattern.jpg';
import myImage from './assets/imagee.png';
import first from './assets/prizes/1.png'
import second from './assets/prizes/2.png'
import third from './assets/prizes/3.png'
import threeD from './assets/prizes/3d.gif'
import blockChain from './assets/prizes/blockchain.gif'
import iot from './assets/prizes/light-control.gif'
import girl from './assets/prizes/girl.gif'
import social from './assets/prizes/fans.gif'

// const SponsorGroup = (props, index) => {
//   return (
//     <Row key={index}>

//     </Row>
//   );
// };

// Prize group
const PrizeGroup = (props, index) => {
  return (
    <Row key={index}>
      {props.map((s, i) => (
        <Col key={i} className="" sm={12} lg={4} md={4}>
          <FirstPrize icon={s.icon} type={s.type} content={s.content} />
        </Col>
      ))}
    </Row>
  );
};

// Prize group ending
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
  UseMedia('min-width', 1000, setMedia);

  return (
    // style={{backgroundImage: `url(${pattern})`}}
    <div className="Whole_div" >
      <div className="color_sectiom" id="home">
        <Container fluid>
          <Row className="Row info">
            <Col className="info-div" sm={12} lg={7} md={7}>
              <Myinfo />
            </Col>
            {/* <Col className="d-image" sm={12} lg={5} md={5}> */}
            {/* <MyCalender /> */}
            {/* </Col> */}
            <Col className='contain'>
              <img className='imagee' src={myImage}></img>
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
        {/* Logo section  */}
        <Row className=" logoSection">
          <Col className="info-div" >
            <LogoSectionAbout />
          </Col>
          <Col className="info-div" >
            <Logo />
          </Col>
        </Row>

        {/* ********Prizes here ***** */}
        <h1 id="prizes" className='prize_heading' style={{ fontFamily: "repo-bold" }}>Prizes</h1>
        <Row className="prizesection" style={{ padding: "10px", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" ,marginTop:"5vh"}}>
          {/* <PrizeHeading type="Prize section" /> */}
          {/* {Prizeinfo.map(PrizeGroup)} */}
          {/* ARRAY -1 */}
          <div className='cards_prizes'>
            <div className="reverse">
              <div className="cardone cards_">
                <div className="bg">
                  <img src={second} alt="" />
                  <div className='text_prizes'>
                    <p>₹ 30,000</p>
                    <p>+</p>
                    <p>cool Innohacks swags...</p>
                  </div>
                </div>
                <div className="blob"> </div>
              </div>
              <div className="cardtwo cards_">
                <div className="bg">
                  <img src={first} width={200} alt="" />
                  <div className='text_prizes'>
                    <p style={{ fontSize: "35px" }}>₹ 50,000</p>
                    <p>+</p>
                    <p>cool Innohacks swags...</p>
                  </div>
                </div>
                <div className="blob"></div>
              </div>
            </div>
            <div className="cardthree cards_">
              <div className="bg">
                <img src={third} width={150} alt="" />
                <div className='text_prizes'>
                  <p>₹ 20,000</p>
                  <p>+</p>
                  <p>cool Innohacks swags...</p>
                </div>
              </div>
              <div className="blob"></div>
            </div>
          </div>
          {/* ARRAY-2 */}
          <div className='more_prizes'>
            <div className='more-one'>
              <img className='gif_prize ' src={threeD} ></img>
              <p className='more-title'>Best Use of XR</p>
              <p>₹ 5,000 and cool Innohacks swags...</p>
            </div>
            <div className='more-one'>
              <img className='gif_prize ' src={blockChain} ></img>
              <p className='more-title'>Best Use of Blockchain</p>
              <p>₹ 5,000 and cool Innohacks swags...</p>
            </div>
            <div className='more-one'>
              <img className='gif_prize ' src={iot} ></img>
              <p className='more-title'>Best Use of IoT</p>
              <p>₹ 5,000 and cool Innohacks swags...</p>
            </div>
            <div className='more-one'>
              <img className='gif_prize ' src={social} ></img>
              <div>
                <div>
                  <p className='more-title'>Most Socially impactful Hack</p>
                  <p>₹ 5,000 and cool Innohacks swags...</p>
                </div>
              </div>
            </div>
            <div className='more-one'>
              <img className='gif_prize ' src={girl} ></img>
              <p className='more-title'>Best All Girl Team</p>
              <p>₹ 5,000 and cool Innohacks swags...</p>
            </div>


          </div>
        </Row>
        {/* ********Prizes ending here ***** */}

        {/* themes */}
        <Row className="prizesection" id="themes">
          <PrizeHeading type="Our Themes" />
          {Themeinfo.map(PrizeGroup)}
        </Row>

        {/* ********Sponsors here ***** */}

        <Row className="sponsorSection" id="sponsors">
          <SponsorsHead />
          <SponsorUS />
          <div className="sponsor-grid">
            {sponsorLogos.map((item, i) => (
              <Col key={i} className="sponsor-logos" sm={12} lg={4} md={6}>
                <div className='sponsor-bg'>
                  <img src={item.src} width={180} alt="" />
                </div>
              </Col>
            ))}
          </div>
        </Row>
        {/* ********Sponsors ending here ***** */}

        {media && <Birds top="120vh" left="0vh" type="" />}

        {/* ********Team here ***** */}
        <h1 id="team">Past Speakers and Judges</h1>
        {TeamInfo.map(TeamMembers)}
        {/* ********Team ending here ***** */}

        {/* ********Judges here ***** */}

        {/* <br></br><br></br>
        <h1 id="team">Judges</h1> */}

        <div className='judges-container'>
          {JudgesInfo.map(TeamMembers)}
        </div>
        {/* ********Team ending here ***** */}
        <Row>
          <CommunityPartner />
        </Row>

        {/* ********Frequently asked Questions here ***** */}
        <div className="Myfaqs" id="faq">
          <h1 className='my-faq-head'>FAQs</h1>
          {frequentlyAskedQuestions.map(FrequentlyAsked)}
          {/* ********Frequently asked Questions ending here ***** */}
        </div>

      </Container>
      <Footer />
    </div>
  );
}
