import React from 'react';
import './App.css';
import './CSS/Contact.css'
import Navbar from "./Pages/NavBar";
import Home from "./Pages/Home";
import About from './Pages/About'
import Experiences from "./Pages/Experiences";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import './CSS/stars.css'


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
                    <a style={{paddingBottom: 0}} className="link two"><i className="fa fa-chevron-down"></i></a>
                    <a style={{paddingTop: '2px'}} className="link two"><i className="fa fa-chevron-down"></i></a>
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
            <Home />
            <About />
            <Experiences />
            <Projects />
            <Contact />
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
