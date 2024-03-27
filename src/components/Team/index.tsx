import React from 'react';
import {Btn} from '../Landing/index.jsx';
import './style.css';

interface IJoinTeam {
  placeholder: string;
  formLink: string;
  content: string;
}

const JoinTeam: React.FC<IJoinTeam> = ({placeholder, formLink, content}) => {
  return (
    <div className="joinT">
      <h3>{content} </h3>
      <a href={formLink}>
        <Btn type={placeholder} overlay="Fill the form" link={formLink} />
      </a>
    </div>
  );
};

const Member = ({info}: {info: any}) => {
  const {github, role, Name, img, linkedin} = info;
  return (
    <div className="member">
      <img src={img} alt="Inno-Hack"></img>
      <div className="members-link">
        <h3 style={{fontFamily:"repo-bold"}}>{Name}</h3>
        <p className='namess' style={{fontFamily:"repo-light", fontSize:"14px"}}>{role}</p>
        {/* <a href={linkedin}>
          <i className="fab fa-2x fa-linkedin"></i>
        </a> */}
      </div>
    </div>
  );
};

export {Member, JoinTeam};
