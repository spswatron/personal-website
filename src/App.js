import React from 'react';
import './App.css';
import About from './Pages/About'
import FontAwesome from 'react-fontawesome'
import faStyles from 'font-awesome/css/font-awesome.css'
import Experiences from "./Pages/Experiences";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import './stars.css'


function FA(props) {
    return(
       <FontAwesome
        className={props.name}
        name={props.name}
        cssModule={faStyles}
        size="2x"
        spin
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
    );
}

class Navbar extends React.Component {
  render(){
    return(
        <ul className="navbar">
          <li className="nav1">
              <div className="top-right">
                  <a href="#home">Ashley Chang</a>
              </div>
          </li>
          <div className="clickable">
              <li className="nav2"><a href="#home">Home</a></li>
              <li className="nav2"><a href="#about">About</a></li>
              <li className="nav2"><a href="#experiences">Experiences</a></li>
              <li className="nav2"><a href="#projects">Projects</a></li>
              <li className="nav2"><a href="#contact">Contact</a></li>
          </div>
          <div className="empty two">
              <div className="container">
                  <h3 className="socials">
                    <i className="fa fa-github"></i>
                    <i className="fa fa-linkedin"></i>
                    <i className="fa fa-instagram"></i>
                    <i className="fa fa-envelope"></i>
                  </h3>
              </div>
          </div>
        </ul>
    )
  }
}

class Body extends React.Component {
  render(){
    return(
        <div className="body">
            <div className="page" id="home">
                <div>
                    <h1 style = {{textAlign: "center", display: 'flex'}}>
                        Hi, I'm Ashley Chang.
                    </h1>
                    <p style = {{textAlign: "center"}}>
                        I'm hear tyring to get clout
                    </p>
                    <h2 className="socials content">
                            <i className="fa fa-github"></i>
                            <i className="fa fa-linkedin"></i>
                            <i className="fa fa-instagram"></i>
                            <i className="fa fa-envelope"></i>
                    </h2>
                </div>
                {/*<h3 className="content">*/}
                {/*   I'm a sad-end developer study us and economics*/}
                {/*</h3>*/}
            </div>
            <About />
            <Experiences />
            <Projects />
            <Contact />
            <div className="page" id="footer">
                <FA name={"a"}/>
            </div>
        </div>
    )
  }
}

function App() {
  return (
    <div className="App">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <h1><i className="nav fa fa-bars"></i></h1>
        <Navbar />
        <Body />
    </div>
  );
}

export default App;
