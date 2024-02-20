import { UseMedia } from 'hooks/useMedia';
import { useState,useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { CommunityPartner, Logo, LogoSectionAbout } from '../../components/About/index.jsx';
import { Accordion } from '../../components/Accordian/index.jsx';
import Birds from '../../components/Animation';
import Footer from '../../components/Footer/index.jsx';
import Schedule from 'components/Schedule/schedule.jsx';
import { Myinfo } from '../../components/Landing/index.jsx';
import { FirstPrize, PrizeHeading, ThemePrize } from '../../components/Prizes/index.jsx';
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
import PastWinner from 'components/pastWinners/index.jsx';
import Aos from 'aos'
import 'aos/dist/aos.css'

// const SponsorGroup = (props, index) => {
//   return (
//     <Row key={index}>

//     </Row>
//   );
// };

// Prize group
const PrizeGroup = (props, index) => {
  return (
    <Row className='theme-container' key={index}>
      {props.map((s, i) => (
        <Col key={i} className="" sm={12} lg={4} md={4}>
          <ThemePrize i={i} icon={s.icon} type={s.type} content={s.content} />
        </Col>
      ))}
    </Row>
  );
};

// Prize group ending
const TeamMembers = (props, index) => {
  useEffect(()=>{
    Aos.init({duration:800})
  },[])
  return (
    <Row key={index} className="members">
      {props.map((s, i) => (
        <Col data-aos="fade-up" key={i} className="" sm={12} lg={4} md={4}>
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
  useEffect(()=>{
    Aos.init({duration:800})
  },[])

  return (
    // style={{backgroundImage: `url(${pattern})`}}
    <div className="Whole_div" >
      <div className="color_sectiom" id="home">
        <Container fluid>
          <Row className="Row info">
            <Col  className="info-div" sm={12} lg={7} md={7}>
              <Myinfo />
            </Col>
            {/* <Col className="d-image" sm={12} lg={5} md={5}> */}
            {/* <MyCalender /> */}
            {/* </Col> */}
            <Col  className='contain'>
              <img data-aos="fade-left" data-aos-duration="800" className='imagee' src={myImage}></img>
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
        <Row  className=" logoSection">
          <Col className="info-div" >
            <LogoSectionAbout />
          </Col>
          <Col className="info-div" >
            <Logo />
          </Col>
        </Row>
        {media && <Birds top="120vh" left="0vh" type="" />}
        


        {/* ********Prizes here ***** */}
        <h1 data-aos="zoom-in" data-aos-duration="800" id="prizes" className='prize_heading' style={{ fontFamily: "repo-bold" }}>Prizes</h1>
        <Row className="prizesection" style={{ padding: "10px", display: "flex", flexDirection: "column", justifyContent: "center" ,marginTop:"5vh"}}>
          {/* <PrizeHeading type="Prize section" /> */}
          {/* {Prizeinfo.map(PrizeGroup)} */}
          {/* ARRAY -1 */}
          <div className='cards_prizes'>
            <div className="reverse">
              <div data-aos="fade-up" className="cardone cards_">
                <div className="bg">
                  <img src={second} alt="" />
                  <div className='text_prizes'>
                    <p>₹ 30K</p>
                    <p>+</p>
                    <p>cool Innohacks swags...</p>
                  </div>
                </div>
                <div  className="blob"> </div>
              </div>
              <div data-aos="fade-up" className="cardtwo cards_">
                <div className="bg">
                  <img src={first} width={200} alt="" />
                  <div className='text_prizes'>
                    <p style={{ fontSize: "35px" }}>₹ 50K</p>
                    <p>+</p>
                    <p>cool Innohacks swags...</p>
                  </div>
                </div>
                <div className="blob"></div>
              </div>
            </div>
            <div data-aos="fade-up" className="cardthree cards_">
              <div className="bg">
                <img src={third} width={150} alt="" />
                <div className='text_prizes'>
                  <p>₹ 20K</p>
                  <p>+</p>
                  <p>cool Innohacks swags...</p>
                </div>
              </div>
              <div className="blob"></div>
            </div>
          </div>
          {/* ARRAY-2 */}
          <div className='more_prizes'>
            <div  data-aos="fade-left" className='more-one'>
              <img className='gif_prize ' src={threeD} ></img>
              <p className='more-title'>Best Use of XR</p>
              <p>₹ 5,000 and cool Innohacks swags...</p>
            </div>
            <div data-aos="fade-right" className='more-one'>
              <img className='gif_prize ' src={blockChain} ></img>
              <p className='more-title'>Best Use of Blockchain</p>
              <p>₹ 5,000 and cool Innohacks swags...</p>
            </div>
            <div data-aos="fade-left" className='more-one'>
              <img className='gif_prize ' src={iot} ></img>
              <p className='more-title'>Best Use of AIoT</p>
              <p>₹ 5,000 and cool Innohacks swags...</p>
            </div>
            <div data-aos="fade-right" className='more-one'>
              <img className='gif_prize ' src={social} ></img>
              <div>
                <div>
                  <p className='more-title'>Most Socially impactful Hack</p>
                  <p>₹ 5,000 and cool Innohacks swags...</p>
                </div>
              </div>
            </div>
            <div data-aos="fade-left" className='more-one'>
              <img className='gif_prize ' src={girl} ></img>
              <p className='more-title'>Best All Girl Team</p>
              <p>₹ 5,000 and cool Innohacks swags...</p>
            </div>


          </div>
        </Row>
        {/* ********Prizes ending here ***** */}

        {/* themes */}
        <Row className="prizesection" id="themes">
          <PrizeHeading data-aos="zoom-in" data-aos-duration="800" type="Our Themes" />
          {Themeinfo.map(PrizeGroup)}
        </Row>

        {/* Schedule here */}
        <Row className='schedule' id="timeline">
        <PrizeHeading data-aos="zoom-in" data-aos-duration="800" type="Schedule" />  
        <Schedule />
        </Row>
        {/* Schedule section ends here */}

        {/* ********Sponsors here ***** */}

        <Row className="sponsorSection" id="sponsors">
          <SponsorsHead />
          <SponsorUS />
          <div  className="sponsor-grid">
            {sponsorLogos.map((item, i) => (
              <Col data-aos={i%2===0 ?`fade-right`:`fade-left`} data-aos-duration="200" key={i} className="sponsor-logos" sm={12} lg={4} md={6}>
                <div  className='sponsor-bg'>
                  <img src={item.src} width={180} alt="" />
                </div>
              </Col>
            ))}
          </div>
        </Row>
        {/* ********Sponsors ending here ***** */}

        

        

        {/* ********Team here ***** */}
        <h1 data-aos="zoom-in" data-aos-duration="800" id="team">Past Speakers and Judges</h1>
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

        {/* past winners */}
        <Row >
          <PastWinner />
        </Row>

        {/* ********Frequently asked Questions here ***** */}
        <div data-aos="fade-up" data-aos-duration="800" className="Myfaqs" id="faq">
          <h1 className='my-faq-head'>FAQs</h1>
          {frequentlyAskedQuestions.map(FrequentlyAsked)}
          {/* ********Frequently asked Questions ending here ***** */}
        </div>

      </Container>
      <Footer />
    </div>
  );
}
