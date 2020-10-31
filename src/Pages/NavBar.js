import React from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Navbar extends React.Component {

  render(){
    return(
        <ul className="navbar" >
          <li className="nav1"><Link activeClass="active" to="new-home"
                                           spy={true} smooth={true} offset={-70} d
                                           uration={250} onSetActive={this.handleSetActive}>
                  Ashley Chang</Link></li>
          <li className="clickable">
              <li className="nav3 nav fa"></li>
              <li className="nav2"><Link activeClass="active" to="about"
                                           spy={true} smooth={true} offset={-70} d
                                           uration={250} onSetActive={this.handleSetActive}>
                  About</Link></li>
              <li className="nav2"><Link activeClass="active" to="experiences"
                                           spy={true} smooth={true} offset={-70} d
                                           uration={250} onSetActive={this.handleSetActive}>
                  Experiences</Link></li>
              <li className="nav2"><Link activeClass="active" to="projects"
                                           spy={true} smooth={true} offset={-70} d
                                           uration={250} onSetActive={this.handleSetActive}>
                  Projects</Link></li>
              <li className="nav2"><Link activeClass="active" to="contact"
                                           spy={true} smooth={true} offset={-70} d
                                           uration={250} onSetActive={this.handleSetActive}>
                  Contact</Link></li>
          </li>
        </ul>
    );
  }
}

export default Navbar