import './style.css';
import { FaInstagram } from "react-icons/fa6";
import { BiLogoDiscordAlt } from "react-icons/bi";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoTwitter } from "react-icons/io";
import { BiLogoTelegram } from "react-icons/bi";

export default function Media() {
  return (
    <div className="media">
      <p>Follow us on social media for updates</p>
      <div className="single" >
        <a rel="noreferrer " target="_blank" href="https://www.instagram.com/innogeeks.kiet/"  >
          <FaInstagram fontSize={40} className='redBlue1'/>
        </a>
      </div>

      <div className="single">
        <a rel="noreferrer" target="_blank" href="https://discord.gg/qNmEeAsuqQ">
           <BiLogoDiscordAlt fontSize={40} className='redBlue2'/>
        </a>
      </div>

      <div className="single">
        <a rel="noreferrer" target="_blank" href="https://t.me/innohacks1">
           <BiLogoTelegram fontSize={40} className='redBlue2'/>
        </a>
      </div>

      <div className="single">
        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/company/innogeeks/mycompany/">
            <CiLinkedin fontSize={40} className='redBlue3'/>
        </a>
      </div>
      <div className="single">
        <a rel="noreferrer" target="_blank" href="https://twitter.com/InnogeeksKiet">
          <IoLogoTwitter fontSize={40} className='redBlue4'/>
        </a>
      </div>
    </div>
  );
}
