import React from 'react';
import './CSS/App.scss';
import './CSS/Contact.scss'
import Navbar from "./Pages/NavBar";
import Home from "./Pages/Home";
import About from './Pages/About'
import Experiences from "./Pages/Experiences";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import './CSS/stars.css'
import Sidebar from "./Pages/Sidebar";
import {Link} from "react-scroll";
import NewHome from "./Pages/newHome";


function SocialBar() {
    return(

        <h3 className="socials">
            <a className="link" href="https://github.com/spswatron" target={"_blank"}><i className="fa fa-github"></i></a>
            <a className="link"><i className="fa fa-linkedin"></i></a>
            <a className="link"><i className="fa fa-instagram"></i></a>
            <a className="link"><i className="fa fa-envelope"></i></a>
            <a className="link"><i className="fa fa-file"></i></a>
        </h3>
    );
}


function App() {
  return (
    <>
        {/*<Stars/>*/}
        <Navbar />
        <div className="top"/>
        <div className={"nav fa"}><Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /></div>
        <NewHome />
        <About />
        <Experiences />
        <Projects />
        <Contact />
        <div id={"footer"}>
        <div className={"big-foot"}>
            <div className="row footer" id={"footer"} style = {{marginTop: '3.5vh'}}>
                  <p>
                      Made with SASS and <i className="fa fa-heart heart"></i> by Ashley Chang
                  </p>
            </div>
            <SocialBar />
        </div>
        </div>
        {/*<ArrowSideBar />*/}
        {/*<Body />*/}
    </>
  );
}

export default App;
