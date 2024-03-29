import React, {useEffect} from 'react'
import './style.scss'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css"

const openLink = (url) => {
  window.open(url, '_blank');
};

const data =[
  {
    name: 'Ayush Kumar',
    img: 'https://s3.ap-south-1.amazonaws.com/innohacks3.0/aayush.jpeg',
    review: 'Github Campus Expert',
    link: ['https://www.linkedin.com/in/ayush-kumar-984443191/']
  },
  {
    name: 'Tejash Seth',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/Tejash+Seth.jpg',
    review: 'Core Lead',
    link: ['https://linktr.ee/tejash11']
  },
  {
    name: 'Anvansh Singh',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/Anvansh+Singh.png',
    review: 'Core Lead',
    link: ['https://www.linkedin.com/in/anvansh/']
  },
  {
    name: 'Anshul Nigam',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/Anshul+Nigam.jpg',
    review: 'Core Lead',
    link: ['https://linktr.ee/anshul_13j']
  },
  {
    name: 'Anjuman Hasan',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/AnjumanHasan.jpeg',
    review: 'Core Lead',
    link: ['https://www.linkedin.com/in/anjuman-hasan/']
  },
  {
    name: 'Anshul Gurjar',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/Anshul+Gurjar.JPG',
    review: 'Core Lead',
    link: ['https://www.linkedin.com/in/anshul-gurjar-88b872257/']
  },
  {
    name: 'Ayush Dubey',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/AyushDubey.jpeg',
    review: 'Core Lead',
    link: ['http://ayushdubey.carrd.co']
  },
  {
    name: 'Anupam Tiwari',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/Anupam.jpeg',
    review: 'Core Lead',
    link:['https://www.linkedin.com/in/anupam1603/']
  },
  {
    name: 'Ambuj Kulshrestha',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/Ambuj+Kulshreshtha.jpg',
    review: 'Core Lead',
    link:['https://linktr.ee/ambuj1211']
  },
  {
    name: 'Arjit Goyal',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/Arjit+Goyal.jpg',
    review: 'Core Lead',
    link:['https://linktr.ee/iamarjitgoyal']
  },
  {
    name: 'Jyoti Ojha',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/Jyoti+Ojha.jpg',
    review: 'Core Lead',
    link:['https://linktr.ee/jyoti0802']
  },
  {
    name: 'Suraj Shukla',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/suraj.jpeg',
    review: 'Core Lead',
    link:['https://www.linkedin.com/in/098suraj/']
  },
  {
    name: 'Abhinav Saxena',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/IMG_7524.JPG',
    review: 'Core Lead',
    link:['https://www.linkedin.com/in/abhinav-saxena-dev/']
  },
  {
    name: 'Kritish Shukla',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/Kritish.jpg',
    review: 'Core Lead',
    link:['https://www.linkedin.com/in/kritish-shukla-805902210/']
  },
  {
    name: ' Soumen Paul',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/SoumenPaul.jpg',
    review: 'Core Lead',
    link:['https://linktr.ee/soumenpaul7']
  },
  {
    name: 'Vishesh Kumar Singh',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/VisheshKumarSingh.jpg',
    review: 'Core Lead',
    link: ['https://linktr.ee/visheshks04']
  },
  {
    name: 'Vidushi Pandey',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/Vidushi+Pandey.jpg',
    review: 'Core Lead',
    link: ['https://tr.ee/BOpXu3cXly']
  },
  {
    name: 'Alisha Raghav',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/core+team/Core+team+photos/Alisha.jpg',
    review: 'Core Team',
    link: ['https://www.linkedin.com/in/alisharaghav/']
  },
  {
    name: 'Varun Agarwal',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/core+team/Core+team+photos/varun.jpg',
    review: 'Core Team',
    link: ['https://www.linkedin.com/in/1010varun/']
  },
  {
    name: 'Sambhrant Tiwari',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/core+team/Core+team+photos/sambhrant.jpeg',
    review: 'Core Team',
    link: ['https://www.linkedin.com/in/sambhrant-tiwari-3998b5218/']
  },
  {
    name: 'Rachitavya Sharma',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/core+team/Core+team+photos/Rachit.jpeg',
    review: 'Core Team',
    link: ['https://www.linkedin.com/in/rachitavya/']
  },
  {
    name: 'Neha Maurya',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/core+team/Core+team+photos/neha.jpeg',
    review: 'Core Team',
    link: ['https://www.linkedin.com/in/neha-maurya-6a8771226/']
  },
  {
    name: 'Aditya Pachuari',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/core+team/Core+team+photos/Aditya.jpg',
    review: 'Core Team',
    link: ['https://www.linkedin.com/in/aditya-pachauri/']
  },
  {
    name: 'Pranjal Raj',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/core+team/Core+team+photos/pranjal.jpg',
    review: 'Core Team',
    link: ['https://www.linkedin.com/in/pranjal-raj-79596a23a/']
  },
  {
    name: 'Kapil Kumar Singh',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/core+team/Core+team+photos/kapil.jpg',
    review: 'Core Team',
    link: ['https://www.linkedin.com/in/kapilsingh2003/']
  },
  {
    name: 'Shubhi Pandey',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/core+team/Core+team+photos/Shubhi+Pandey.jpg',
    review: 'Core Team',
    link: ['https://www.linkedin.com/in/shubhi-pandey/']
  },
  {
    name: 'Nivedita Rai',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/core+team/Core+team+photos/Nivedita+Rai.jpg',
    review: 'Core Team',
    link: ['https://www.linkedin.com/in/nivedita-rai-670a4723a/']
  },
  {
    name: 'Mrigya Sahai',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/core+team/Core+team+photos/Mrigya.jpg',
    review: 'Core Team',
    link: ['https://www.linkedin.com/in/mrigya-sahai-246842196/']
  },
  {
    name: 'Suraj Upadhyaya',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/core+team/Core+team+photos/Suraj.jpg',
    review: 'Core Team',
    link: ['https://www.linkedin.com/in/suraj-upadhayay-533b22264/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app']
  },
  {
    name: 'Nayan Pathak',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/core+team/Core+team+photos/Nayan.jpg',
    review: 'Core Team',
    link: ['https://www.linkedin.com/in/nayan-pathak-softwaredeveloper/']
  },
  {
    name: 'Bhavishya Chaudhary',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/core+team/Core+team+photos/Bhavishya.JPG',
    review: 'Core Team',
    link: ['https://www.linkedin.com/in/bhavishya-chaudhary-044324231/']
  },
  {
    name: 'Aryan Mishra',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/core+team/Core+team+photos/AryanMishra.jpg',
    review: 'Core Team',
    link: ['https://www.linkedin.com/in/aryanmishra29/']
  },
  {
    name: 'Harsh Singh',
    img: 'https://innogeeks-images.s3.ap-south-1.amazonaws.com/core+team/Core+team+photos/Harsh.jpg',
    review: 'Core Team',
    link: ['https://www.linkedin.com/in/the-harsh-singh/']
  }

]

const settings={
  dots:true,
  
  infinite:true,
  speed:500,
  slidesToShow: 3, 
  slidesToScroll:1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 950,
      settings: { 
        dots: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 630,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
}




export default function Organiser() {
 return (
  <div className ="" id='testimonial'>
    <h1 className="meet-heading">
        Meet the Organizing Team 
      </h1>
    <div className="organiser-container">
    <Slider{...settings}>
      {data.map((d,index) =>(
        <div key={index} className="morphism">
          <div className="organiser-card">
            <img key={d.name} src={d.img} alt="" className="organiser-img"/>
          </div>

          <div className="organiser-text-container">
            <p className='organiser-name'>{d.name}</p>
            <p className='organiser-designation'>{d.review}</p>
            <button key={d.name} className='contact-btn' onClick={()=> openLink(d.link)}>Connect</button>
          </div>
        </div>
      ))}
    </Slider>
    </div>
  </div>
 );
}
