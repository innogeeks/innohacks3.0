import {useEffect, useRef, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';
import styled from 'styled-components';
import HomePage from '../Home/HomePage';
import logoClose from './assets/ham-c.svg';
import hamLogo from './assets/ham.svg';
import './styles.scss';
import {MdxContent} from '../Mdx';
import navLogo from "./assets/nav-logo.png"
import Counter from '../../components/Counter/Counter'


const NAVIGATION_OFFSET = 66;

const Wrapper = styled.div`
  display: block;
  width: 40%;

  @media (max-width: 1000px) {
    margin: 0;
    display: ${props => (props.toggle ? 'none' : 'static')};
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: ${props => (props.toggle ? '-1000px' : '0px')};
    transition: top 1s;
    .nav-content {
      height: 340px;
      background-color: rgba(50, 13, 136);
      ul {
        margin-left: 0; // Remove margin-left in mobile view
      }
    }
  }

  @media (min-width: 1001px) {
    .nav-content {
      ul {
        margin-left: -40vh; // Set margin-left to -40vh in laptop view
      }
    }
  }
`;


const NAVBAR = ({}) => {
  const [toggle, setToggle] = useState(true);
  const [isOffset, setIsOffset] = useState(false);

  const navigation = useRef();

  const listenScrollEvent = e => {
    if (window.scrollY >= NAVIGATION_OFFSET) {
      setIsOffset(true);
    } else {
      setIsOffset(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);


  return (
    <Router>
      <nav className={`nav_bar ${isOffset && 'nav_bar-offset-crossed'}`} >
      
     
      <div className='logo-div'>
        <img src={navLogo} className="nav-logo" width={180}></img>
      </div>

        <Wrapper  toggle={toggle}>
          <div className="nav-content" ref={navigation} >
            <ul>
              <li>
                <Link to={`#home`} smooth="true">
                  <span className="links">Home</span>{' '}
                </Link>
              </li>
              
              <li>
                <Link to={`#prizes`} smooth="true">
                  <span className="links">Prizes </span>{' '}
                </Link>
              </li>
              <li>
                <Link to={`#themes`} smooth="true">
                  <span className="links">Themes </span>{' '}
                </Link>
              </li>
              <li>
                <Link to={`#sponsors`} smooth="true">
                  <span className="links">Sponsors</span>{' '}
                </Link>
              </li>
              <li>
                <Link to={`#judges`} smooth="true">
                  <span className="links">Judges </span>{' '}
                </Link>
              </li>
              <li>
                <Link to={`#testimonial`} smooth="true">
                  <span className="links">Team </span>{' '}
                </Link>
              </li>
              <li>
                <Link to={`#faq`} smooth="true">
                  <span className="links">FAQ</span>{' '}
                </Link>
              </li>
              <li>
                <a href='https://drive.google.com/file/d/1-erC54DIgsqZ9wCTSaeX7zhj5a0aQS-d/view?usp=sharing'>
                  <span className="links">Guidelines</span>{' '}
                </a>
              </li>
              {/* LIKE COUNTER */}
              <li><Counter/></li>
              <img
                className="s-close"
                onClick={() => setToggle(true)}
                src={logoClose}
              />
            </ul>
          </div>
          <div className="ease" />
        </Wrapper>
        
        <img
          className="s-open"
          onClick={() => setToggle(false)}
          src={hamLogo}
        />
      </nav>

      <Switch>
        <Route path="/blog" exact={true}>
          <MdxContent />
        </Route>
        <Route path="/" exact={true}>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default NAVBAR;
