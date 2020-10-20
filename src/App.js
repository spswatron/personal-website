import React from 'react';
import './App.css';
import About from './Pages/About'
import Experiences from "./Pages/Experiences";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import './stars.css'

class Navbar extends React.Component {ƒ
  render(){
    return(
        <ul className="navbar" >
          <li className="nav1">
              <div className="top-right">
                  <a href="#home">Ashley Chang</a>
              </div>
          </li>
          <li className="clickable">
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

function SocialSideBar() {
    return(
        <div className="navbar">
        <div className="empty two">
            <h3 className="socials">
                <a className="link"><i className="fa fa-github"></i></a>
                <a className="link"><i className="fa fa-linkedin"></i></a>
                <a className="link"><i className="fa fa-instagram"></i></a>
                <a className="link"><i className="fa fa-envelope"></i></a>
            </h3>
        </div>
        </div>
    );
}

function EmailSideBar() {
    return(
        <a>
            <i className="fa fa-chevron-down"></i>
            <i className="fa fa-chevron-down"></i>
            <i className="fa fa-chevron-down"></i>
        </a>
    );
}

class Body extends React.Component {
  render(){
    return(
        <div className="body">
            <div className="page" id="home">
                <div>
                    <div className={"row"}>
                    <h1 style = {{textAlign: "center", display: 'block'}}>
                        Hi, I'm
                    </h1>
                    <h1 style = {{textAlign: "center", display: 'block'}}>
                        <span style={{color: '#ccd6f6'}}> Ashley Chang</span>.
                    </h1>
                    </div>
                    <p style = {{textAlign: "center"}}>
                        I'm an aspiring something-something.
                    </p>
                {/*<h3 className="content">*/}
                {/*   I'm a sad-end developer study us and economics*/}
                {/*</h3>*/}
                </div>
            </div>
            <About />
            <Experiences />
            <Projects />
            <Contact />
            <div className={"page row footer"} style = {{height: '10%', zIndex: '4'}}>
                <label>
                    Designed, built, and made with <i className="fa fa-heart heart"></i> by Ashley Chang
                </label>
         </div>
        </div>
    )
  }
}

function Stars() {
    return(
        <div className="background-container">
            <div className="stars"></div>
            <div className="twinkling"></div>
        </div>
    );
}

function App() {
  return (
    <div className="App">
        <div className={"top"}>Hi</div>
        <SocialSideBar />
        <EmailSideBar />
        <Stars/>
        {/*<h1><i className="nav fa fa-bars"></i></h1>*/}
        <Navbar />
        <Body />
    </div>
  );
}

export default App;
