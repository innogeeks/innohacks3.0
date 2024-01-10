import {SOCIALS} from '../../Module/General';
import './style.css';
import { FaInstagram } from "react-icons/fa6";
import { BiLogoDiscordAlt } from "react-icons/bi";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoTwitter } from "react-icons/io";

export default function Media() {
  return (
    <div className="media">
      <p>Follow us on social media for updates</p>
      <div className="single" >
        <a rel="noreferrer " target="_blank" href={SOCIALS.instagram}  >
          <FaInstagram fontSize={40} className='redBlue1'/>
        </a>
      </div>

      <div className="single">
        <a rel="noreferrer" target="_blank" href={SOCIALS.discord}>
           <BiLogoDiscordAlt fontSize={40} className='redBlue2'/>
        </a>
      </div>

      <div className="single">
        <a rel="noreferrer" target="_blank" href={SOCIALS.linkedin}>
            <CiLinkedin fontSize={40} className='redBlue3'/>
        </a>
      </div>
      <div className="single">
        <a rel="noreferrer" target="_blank" href={SOCIALS.twitter}>
          <IoLogoTwitter fontSize={40} className='redBlue4'/>
        </a>
      </div>
    </div>
  );
}
