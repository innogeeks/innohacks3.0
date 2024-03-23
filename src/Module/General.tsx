import "./prize.css";

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


import babbar from "./Assets/teami/babbar.jpg"
import khushboo from "./Assets/teami/khushboo.jpg"
import striver from "./Assets/teami/striver.jpeg"
import sandeep from "./Assets/teami/sandeep jain.jpg"
import kshitiz from "./Assets/teami/kshitiz.jpeg"
import akshay from "./Assets/teami/akshay saini.jpg"
import arsh from "./Assets/teami/arsh goyal.jpg"
import kushal from "./Assets/teami/kushal.jpeg"



const TOP_SECTION = {
  TITLE: 'Join Innohacks3.0',
  Typed_effect: ['24-Hour of Innovation', 'Win awesome prizes'],
  SHORT_DESCRIPTION:
    'Unleash your creativity for 24-Hour! Join us on April 28th for a nationwide hackathon alongside hundreds of other student innovators. Build, learn, and connect - are you in?',
  IMG_SRC: "https://s3.ap-south-1.amazonaws.com/innohacks3.0/Innohacks+3.0+Logo.png",
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
  TITLE: 'What is Innohacks ?',
  LONG_DESCRIPTION:
    'The largest code fest of Delhi-NCR is back! Join a 24-Hour Hackathon to hustle and shine through 5 amazing tracks, Embark on an Odyssey to learn new technologies in captivating environment seek guidance from experienced mentors and engrave your name on boards of our esteemed Judges! Not just that, win huge prizes and hampers by brainstorming and creating the best hack! Be ready to sail through an amazing night of fun, code and much more!',
  LOGO: "https://s3.ap-south-1.amazonaws.com/innohacks3.0/Innohacks+3.0+Logo.png"
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
      icon: <img src={"https://s3.ap-south-1.amazonaws.com/innohacks3.0/theme/bolockchain.png"} width={"100px"} className="icons"/>,
      type: 'Blockchain/Web3',
      content:
        ''
    },
    {
      icon: <img src={"https://s3.ap-south-1.amazonaws.com/innohacks3.0/theme/smart+security.png"} width={"100px"} className="icons"></img>,
      type: 'Smart Security',
      content:
        ''
    },
    {
      icon: <img src={"https://s3.ap-south-1.amazonaws.com/innohacks3.0/theme/fintech.png"} width={"100px"} className="icons"></img>,
      type: 'FinTech',
      content:
        ''
    }
  ],
  [
    //Array 2
    {
      icon: <img src={"https://s3.ap-south-1.amazonaws.com/innohacks3.0/theme/arvr.png"} width={"100px"} className="icons"></img>,
      type: 'AR/VR',
      content:
        ''
    },
    {
      icon: <img src={"https://s3.ap-south-1.amazonaws.com/innohacks3.0/theme/aiiot.png"} width={"100px"} className="icons"></img>,
      type: 'AIoT',
      content: ''
    },
    {
      icon: <img src={"https://s3.ap-south-1.amazonaws.com/innohacks3.0/theme/open+innovation.png"} width={"100px"} className="icons"></img>,
      type: 'Open Innovation',
      content: ''
    }
  ]
];

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
    },
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
  ]
];

const titleSponsor = [{src: twenty}];
const platinumSponsor = [{src: seventeen}, {src: fire}];
const goldSponsor = [{src: fifteen}];
const silverSponsor = [{src: eight}, {src: first}, {src: second}, {src: sixteen},
  {src: forth}, {src: fifth}, {src: sixth},
  {src: seventh}, {src: nine}, {src: twelve},
  {src: thirteen}, {src: coding}, {src: auth},
  {src: eighteen}];
const educationSponsor = [{src: eleven}];
const certificateSponsor = [{src: fourteen}];

// const sponsorLogos = [ ];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions = [
  [
    [
      {
        label: 'What is a hackathon?',
        content:
        'A hackathon is a 24 hour event where "hackers" all over the globe collaborate on creating a functioning software and hardware by the end of the event.'
      },
      {
        label:' Who can attend?',
        content:
           'InnoHacks is open to all undergraduates from all over India.'
      },
      {
        label: 'I am a first time hacker, what should I do?',
        content:
          'No worries, we love to welcome first time hackers and start their hacking journey from a hackathon. We have some awesome workshops and events which will help you get started with hackathons in general.'
      },
      {
        label: 'How does team formation works?',
        content:
          "You can form team with maximum 4 members. If you don't have a team, there will be plenty of opportunities for you to meet hackers and form a team!"
      }
    ],
    [
      {
        label: 'How to register myself in the Innohacks 3.0?',
        content:
          'All you need to do is fill our form mentioned above and join our Discord channel, we will guide you through everything there'
      },
      {
        label: 'I have more questions?',
        content:
          'Reach us directly at (innohacks@kiet.edu). We would happy to help you.'
      },
      {
        label: 'Will there be a Registration Fee?',
        content:
          'No!'
      },
      {
        label: 'Will there be swags?',
        content: 'Yes! Participants will many chances to win InnoHacks 3.0 swags!.'
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
  TeamInfo,
  frequentlyAskedQuestions,
  schedule,
  calenderStartingDate,
  Themeinfo,
  titleSponsor,
  platinumSponsor,
  goldSponsor,
  silverSponsor,
  educationSponsor,
  certificateSponsor
};
