import React from 'react';

class Navbar extends React.Component {
  render(){
    return(
        <ul className="navbar" >
          <li className="nav1"><a href="#home">Ashley Chang</a></li>
          <li className="clickable">
              <li className="nav3 nav fa"></li>
              <li className="nav2"><a href="#about">About</a></li>
              <li className="nav2"><a href="#experiences">Experiences</a></li>
              <li className="nav2"><a href="#projects">Projects</a></li>
              <li className="nav2"><a href="#contact">Contact</a>
              </li>
          </li>
        </ul>
    );
  }
}

export default Navbar