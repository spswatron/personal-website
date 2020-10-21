import React from 'react';
import './App.css';
import './CSS/Contact.css'
import About from './Pages/About'
import Experiences from "./Pages/Experiences";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import './CSS/stars.css'

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

function SocialSideBar() {
    return(
        <div className="navbar" style = {{zIndex: 2}}>
        <div className="empty two">
            <h3 className="socials">
                <a className="link" href="https://github.com/spswatron"><i className="fa fa-github"></i></a>
                <a className="link"><i className="fa fa-linkedin"></i></a>
                <a className="link"><i className="fa fa-instagram"></i></a>
                <a className="link"><i className="fa fa-envelope"></i></a>
                <div className={"line"}></div>
            </h3>
        </div>
        </div>
    );
}



function ArrowSideBar() {
    return(
        <div className={"navbar"} style = {{justifyContent: 'flex-end', zIndex: 2}}>
            <div className={"empty two"}>
                <a className={"socials"}>
                    <a className="link">
                    <a className="link two"><i className="fa fa-chevron-down"></i></a>
                    <a className="link two"><i className="fa fa-chevron-down"></i></a>

                    </a>

                    {/*<div className={"link sideways"} style={{textOrientation: 'sideways'}}>ashley_e_chang@brown.edu</div>*/}
                    <div className={"line"}></div>
                </a>
                </div>
            </div>
    );
}

class Body extends React.Component {
  render(){
    return(
        <div className="body">
            <div className="page" id="home">
                <div>
                    <div className={"row"} style = {{justifyContent: "center"}}>
                    <h1 style = {{textAlign: "center", display: 'block', marginTop: 0}}>
                        Hi, I'm
                    </h1>
                    <h1 style = {{textAlign: "center", display: 'block', marginTop: 0}}>
                        <span style={{color: '#ccd6f6'}}> Ashley Chang</span>
                    </h1>
                    </div>
                    <p style = {{textAlign: "center", marginTop: 0, marginBottom: 0, maxWidth: '665px'}}>
                        I'm a sophomore at Brown University studying Computer Science and English.
                        I'm an aspiring back-end developer and fiction writer.
                    </p>
                     <div className={"row"} style = {{justifyContent: "center", alignItems:'center'}}>
                         <a href="#contact">
                    <button className="form-field" type="contact" style = {{borderRadius: '10px'}}
                        href="#contact"> Contact Me </button>
                         </a>
                     </div>
                {/*<h3 className="content">*/}
                {/*   I'm a sad-end developer study us and economics*/}
                {/*</h3>*/}
                </div>
            </div>
            <About />
            <Experiences />
            <Projects />
            <Contact />
            <div className={"page footer"} style = {{height: '10%', zIndex: '4'}}>
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
    <>
    <div className="App">
        <div className={"top"}>Hi</div>
        <SocialSideBar />
        <ArrowSideBar />
        <Stars/>
        <Navbar />
        <Body />
    </div>
    </>
  );
}

export default App;
