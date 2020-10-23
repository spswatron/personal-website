import React from 'react';
import './CSS/App.scss';
import './CSS/Contact.css'
import Navbar from "./Pages/NavBar";
import Home from "./Pages/Home";
import About from './Pages/About'
import Experiences from "./Pages/Experiences";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import './CSS/stars.css'
import Sidebar from "./Pages/Sidebar";
import './Pages/Sidebar.scss'


function SocialSideBar() {
    return(
        <h3 className="socials">
            <a className="link" href="https://github.com/spswatron"><i className="fa fa-github"></i></a>
            <a className="link"><i className="fa fa-linkedin"></i></a>
            <a className="link"><i className="fa fa-instagram"></i></a>
            <a className="link"><i className="fa fa-envelope"></i></a>
            <div className={"line"}></div>
        </h3>
    );
}



function ArrowSideBar() {
    return(
        <h3 className="arrows">
                    <a style={{paddingBottom: 0}} className="link two"><i className="fa fa-chevron-down"></i></a>
                    <a style={{paddingTop: '2px'}} className="link two"><i className="fa fa-chevron-down"></i></a>
                    <div className={"line"}></div>
        </h3>
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
        <Stars/>
        <div className={"nav fa"}><Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /></div>
    <div className="App">
        <SocialSideBar />
        <ArrowSideBar />
        <Navbar />
        <Body />
    </div>
    </>
  );
}

export default App;
