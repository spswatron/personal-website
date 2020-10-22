import React from 'react';

class Navbar extends React.Component {
  render(){
    return(
        <ul className="navbar" >
          <li className="nav1">
              <div className="top-right">
                  <a href="#home">Ashley Chang</a>
              </div>
          </li>
          <li className="clickable">
              <li className="nav3"><i className="nav fa fa-bars"
                           style={{fontSize:'35px'}}></i></li>
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