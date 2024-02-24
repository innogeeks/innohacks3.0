// import hackathonLogo from './Assets/hackathonLogo.png';
import hackathonLogo from './Assets/Innohacks 3.0 Logo.png';

// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

// import boy from './Assets/boy.png';
// import lyin from './Assets/teami/lyin.jpg';

// import hdfc from "./Assets/sponsorsLogos/hdfc.png"
// import gfg from "./Assets/sponsorsLogos/gfg.png"
// import taskade from './Assets/sponsorsLogos/taskade.png';
// import github from "./Assets/sponsorsLogos/github.jpg"
// import codingMinutes from "./Assets/sponsorsLogos/coding minutes.jpeg"
// import metty from "./Assets/sponsorsLogos/metty.png"
import React from 'react';
import first from "./Assets/sponsorsLogos/1.png"
import second from "./Assets/sponsorsLogos/2.png"
import coding from "./Assets/sponsorsLogos/coding.jpeg"
import forth from "./Assets/sponsorsLogos/4.png"
import fifth from "./Assets/sponsorsLogos/5.png"
import sixth from "./Assets/sponsorsLogos/6.png"
import seventh from "./Assets/sponsorsLogos/7.png"
import eight from "./Assets/sponsorsLogos/8.png"
import nine from "./Assets/sponsorsLogos/9.png"
import auth from "./Assets/sponsorsLogos/auth.png"
import eleven from "./Assets/sponsorsLogos/11.png"
import twelve from "./Assets/sponsorsLogos/12.png"
import thirteen from "./Assets/sponsorsLogos/13.png"
import fourteen from "./Assets/sponsorsLogos/14.png"
import fifteen from "./Assets/sponsorsLogos/15.png"
import sixteen from "./Assets/sponsorsLogos/16.png"
import seventeen from "./Assets/sponsorsLogos/17.png"
import eighteen from "./Assets/sponsorsLogos/18.png"
import fire from "./Assets/sponsorsLogos/5ire.png"
import twenty from "./Assets/sponsorsLogos/20.png"


/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets

import babbar from "./Assets/teami/babbar.jpg"
import khushboo from "./Assets/teami/khushboo.jpg"
import striver from "./Assets/teami/striver.jpeg"
import sandeep from "./Assets/teami/sandeep jain.jpg"
import kshitiz from "./Assets/teami/kshitiz.jpeg"
import akshay from "./Assets/teami/akshay saini.jpg"
import arsh from "./Assets/teami/arsh goyal.jpg"
import kushal from "./Assets/teami/kushal.jpeg"

// importing all themes
import security from '../containers/Home/assets/theme/9.png'
import blockchain from '../containers/Home/assets/theme/4.png'
import fintech from '../containers/Home/assets/theme/5.png'
import iot from '../containers/Home/assets/theme/7.png'
import vr from '../containers/Home/assets/theme/6.png'
import open from '../containers/Home/assets/theme/8.png'


const TOP_SECTION = {
  TITLE: 'Join InnoHacks3.0',
  Typed_effect: ['24-Hour of Innovation', 'Win awesome prizes'],
  SHORT_DESCRIPTION:
    'Unleash your creativity for 24-Hour! Join us on April 27th for a nationwide hackathon alongside hundreds of other student innovators. Build, learn, and connect - are you in?',
  IMG_SRC: hackathonLogo,
  DISCORD_LINK: '',
  JUDGES_FORM_LINK:
    '#',
  HACKERS_REGISTRATION_FORM_LINK:
    '#'
};

const SOCIALS = {
  instagram: 'https://www.instagram.com/innogeeks.kiet/',
  discord: '#',
  linkedin: 'https://www.linkedin.com/company/innogeeks?originalSubdomain=in',
  twitter: 'https://twitter.com/InnogeeksKiet',
  devpost: '#',
  email: 'innogeeks@kiet.edu',
  mail: 'innogeeks@kiet.edu'
};

const MIDDLE_SECTION = {
  TITLE: 'What is InnoHacks ?',
  LONG_DESCRIPTION:
    'The largest code fest of Delhi-NCR is back! Join a 24-Hour Hackathon to hustle and shine through 5 amazing tracks, Embark on an Odyssey to learn new technologies in captivating environment seek guidance from experienced mentors and engrave your name on boards of our esteemed Judges! Not just that, win huge prizes and hampers by brainstorming and creating the best hack! Be ready to sail through an amazing night of fun, code and much more!',
  LOGO: hackathonLogo
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: '#'
  },
  JOIN_TEAM: {
    required: true,
    src: '#'
  },
  Privacy_policy: {
    required: true,
    src: ''
  },
  Terms_of_use: {
    required: true,
    src: ''
  }
};

/** SCHEDULE
 *
 * INSTRUCTIONS
 *
 * Date format : 8-11-2021, 18-11-2021 (without trailing zeros)
 */

const calenderStartingDate = {
  month: 4,
  year: 2024
};

const schedule = [
  {
    day: '28-4-2024',
    events: [
      {
        title: 'Idea Prototyping ans submission',
        timings: '12 AM - 11PM',
        // link: 'https://google.com'
      }
    ]
  },
  {
    day: '30-4-2024',
    events: [
      {
        title: 'Intro to deep learning',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      },
      {
        title: 'Intro to deep learning',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '1-5-2024',
    events: [
      {
        title: 'Intro to phycycology',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      },
      {
        title: 'Intro to deep learning',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      },
      {
        title: 'Intro to deep learning',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      },{
        title: 'Intro to deep learning',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '2-5-2024',
    events: [
      {
        title: 'Intro to phycycology',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      },
      {
        title: 'Intro to phycycology',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      },
      {
        title: 'Intro to phycycology',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      },
      {
        title: 'Intro to phycycology',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  }
];

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */
import "./prize.css";
const Prizeinfo = [
  [
    //Array 1
    {
      icon: <img src='https://cdn-icons-png.flaticon.com/512/6394/6394616.png' width={"100%"} className="icons"/>,
      type: 'First Prize',
      content:
        '₹ 50,000 and cool Innohacks swags...'
    },
    {
      icon: <img src='https://cdn-icons-png.flaticon.com/512/5406/5406798.png' width={"100%"} className="icons"></img>,
      type: 'Second Prize',
      content:
        '₹ 30,000 and cool Innohacks swags...'
    },
    {
      icon: <img src='https://cdn-icons-png.flaticon.com/512/5406/5406800.png ' width={"100%"} className="icons"></img>,
      type: 'Third Prize',
      content:
        '₹ 20,000 and cool Innohacks swags...'
    }
  ],
  [
    //Array 2
    {
      icon: <div className="icons"><i className="fab fourth fa-3x fa-wpbeginner" ></i></div>,
      type: 'Best Use of Blockchain',
      content:
        '₹ 5,000 and cool Innohacks swags...'
    },
    {
      icon: <div className="icons"><i className="first fas fa-4x fa-trophy"></i></div>,
      type: ' Best Use of XR',
      content: '₹ 5,000 and cool Innohacks swags...'
    },
    {
      icon: <div className="icons"><i className=" fifth fa-3x fas fa-book-open"></i></div>,
      type: 'Best Use of AIoT',
      content: '₹ 5,000 and cool Innohacks swags...'
    }
  ],
  [
    //Array 3
    {
      icon: <div className="icons"><i className="fas fa-4x sixth fa-male"></i></div>,
      type: 'Most Socially impactful Hack',
      content: '₹ 5,000 and cool Innohacks swags...'
    },
    {
      icon: <div className="icons"><i className="fas fa-user-friends seventh fa-3x "></i></div>,
      type: 'Best All Girl Team',
      content: '₹ 5,000 and cool Innohacks swags...'
    }
  ]
];
const Themeinfo = [
  [
    //Array 1
    {
      icon: <img src={blockchain} width={"100px"} className="icons"/>,
      type: 'Blockchain/Web3',
      content:
        ''
    },
    {
      icon: <img src={security} width={"100px"} className="icons"></img>,
      type: 'Smart Security',
      content:
        ''
    },
    {
      icon: <img src={fintech} width={"100px"} className="icons"></img>,
      type: 'FinTech',
      content:
        ''
    }
  ],
  [
    //Array 2
    {
      icon: <img src={vr} width={"100px"} className="icons"></img>,
      type: 'AR/VR',
      content:
        ''
    },
    {
      icon: <img src={iot} width={"100px"} className="icons"></img>,
      type: 'AIoT',
      content: ''
    },
    {
      icon: <img src={open} width={"100px"} className="icons"></img>,
      type: 'Open Innovation',
      content: ''
    }
  ]
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      Name: 'Love Babbar',
      role: 'Love Babbar',
      github: '',
      linkedin: 'https://www.linkedin.com/in/love-babbar-38ab2887/',
      img: babbar
    },
    {
      Name: 'Striver',
      role: 'Striver',
      github: '',
      linkedin: 'https://www.linkedin.com/in/rajstriver/',
      img: striver
    },
    {
      Name: 'Akshay Saini',
      role: 'Akshay Saini',
      github: '',
      linkedin: 'https://www.linkedin.com/in/akshaymarch7/',
      img: akshay
    }
  ],
  [
    //Array 2
    {
      Name: 'Sandeep Jain',
      role: 'Sandeep Jain',
      github: '',
      linkedin: 'https://www.linkedin.com/in/sandeep-jain-/',
      img: sandeep
    },
    {
      Name: 'Arsh Goyal',
      role: 'Arsh Goyal',
      github: '',
      linkedin: 'https://www.linkedin.com/in/arshgoyal/',
      img: arsh
    },
    {
      Name: 'Kshitiz Miglani',
      role: 'Kshitiz Miglani',
      github: '',
      linkedin: 'https://www.linkedin.com/in/kshitizmiglani/',
      img: kshitiz
    }
  ]
];

const JudgesInfo = [
  [
    //Array 1
    {
      Name: 'Kushal Vijay',
      role: 'Kushal Vijay',
      github: '',
      linkedin: 'https://www.linkedin.com/in/kushalvijay/',
      img: kushal
    },
    {
      Name: 'Khushboo Verma',
      role: 'Khushboo Verma',
      github: '',
      linkedin: 'https://www.linkedin.com/in/verma-khushboo/',
      img: khushboo
    },
  ],
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  {src: first}, {src: second}, {src: sixteen},
  {src: forth}, {src: fifth}, {src: sixth},
  {src: seventh}, {src: eight}, {src: nine},
  {src: seventeen}, {src: eleven}, {src: twelve},
  {src: thirteen}, {src: fourteen}, {src: fifteen},
  {src: coding}, {src: auth}, {src: fire},
  {src: eighteen}, {src: twenty}
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions = [
  [
    [
      {
        label: <div className='faqs'>What is a hackathon?</div>,
        content:
          <div>A hackathon is a 24 hour event where "hackers" all over the globe collaborate on creating a functioning software and hardware by the end of the event.</div>
      },
      {
        label: <div className='faqs'>Who can attend?</div>,
        content:
           <div className="faqs">InnoHacks is open to all undergraduates from all over India.</div>
      },
      {
        label: <div className="faqs">I am a first time hacker, what should I do?</div>,
        content:
          <div className="faqs">No worries, we love to welcome first time hackers and start their hacking journey from a hackathon. We have some awesome workshops and events which will help you get started with hackathons in general.</div>
      },
      {
        label: <div className="faqs">How does team formation works?</div>,
        content:
          <div className="faqs">You can form team with maximum 4 members. If you don't have a team, there will be plenty of opportunities for you to meet hackers and form a team!</div>
      }
    ],
    [
      {
        label: <div className="faqs">How to register myself in the Innohacks 3.0?</div>,
        content:
          <div className="faqs">All you need to do is fill our form mentioned above and join our Discord channel, we will guide you through everything there</div>
      },
      {
        label: <div className="faqs">I have more questions?</div>,
        content:
          <div className="faqs">Reach us directly at (innohacks@kiet.edu). We would happy to help you.</div>
      },
      {
        label: <div className="faqs">Will there be a Registration Fee?</div>,
        content:
          <div className="faqs">No!</div>
      },
      {
        label: <div className="faqs">Will there be swags?</div>,
        content: <div className="faqs">Yes! Participants will many chances to win InnoHacks 3.0 swags!.</div>
      }
    ]
  ]
];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  Prizeinfo,
  sponsorLogos,
  TeamInfo,
  JudgesInfo,
  frequentlyAskedQuestions,
  schedule,
  calenderStartingDate,
  Themeinfo
};
