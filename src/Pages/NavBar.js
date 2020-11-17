import React from 'react';
import { Link } from 'react-scroll'

class Navbar extends React.Component {

  render(){
    return(
        <ul className="navbar" >
          <li className="nav1"><Link activeClass="active" to="new-home"
                                           spy={true} smooth={true} offset={0} d
                                           uration={50}>
                  Ashley Chang</Link></li>
          <li className="clickable">
              <li className="nav3 nav fa"></li>
              <li className="nav2"><Link activeClass="active" to="about"
                                           spy={true} smooth={true} offset={-25} >
                  About</Link></li>
              <li className="nav2"><Link activeClass="active" to="experiences"
                                           spy={true} smooth={true} offset={-25} d
                                           uration={50}>
                  Experiences</Link></li>
              <li className="nav2"><Link activeClass="active" to="projects"
                                           spy={true} smooth={true} offset={-25} d
                                           uration={50}>
                  Projects</Link></li>
              <li className="nav2"><Link activeClass="active" to="contact"
                                           spy={true} smooth={true} offset={-90} d
                                           uration={50}>
                  Contact</Link></li>
          </li>
        </ul>
    );
  }
}

export default Navbar