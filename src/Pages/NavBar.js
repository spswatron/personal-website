import React from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Navbar extends React.Component {

  render(){
    return(
        <ul className="navbar" >
          <li className="nav1"><Link activeClass="active" to="home" spy={true} smooth={true} offset={-60} duration={300}>Ashley Chang</Link></li>
          <li className="clickable">
              <li className="nav3 nav fa"></li>
              <li className="nav2"><Link activeClass="active" to="about" spy={true} smooth={true} offset={-60} duration={300}>About</Link></li>
              <li className="nav2"><Link activeClass="active" to="experiences" spy={true} smooth={true} offset={-60}  duration={300}>Experiences</Link></li>
              <li className="nav2"><Link activeClass="active" to="projects" spy={true} smooth={true} offset={-60} duration={300}>Projects</Link></li>
              <li className="nav2"><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-60} duration={300}>Contact</Link></li>
          </li>
        </ul>
    );
  }
}

export default Navbar