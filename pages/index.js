import React from 'react';
import Navbar from "../components/NavBar";
import About from '../components/About'
import Experiences from "../components/Experiences";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Sidebar from "../components/Sidebar";
import NewHome from "../components/newHome";
import { Link } from 'react-scroll'

function SocialBar() {
    return(
        <div className="socials" style={{margin: 0}}>
            <a className="link" href="https://github.com/spswatron" target={"_blank"}  rel="noopener noreferrer"><i className="fa fa-github"/></a>
            <a className="link" href={"https://www.linkedin.com/in/ashley-e-chang"} target={"_blank"}  rel="noopener noreferrer"><i className="fa fa-linkedin"/></a>
              <a className="link" href="mailto:ashley_e_chang@brown.edu" target={"_blank"}  rel="noopener noreferrer"><i className="fa fa-envelope"/></a>
            <a className="link" href="/resume" target={"_blank"}  rel="noopener noreferrer" style={{paddingRight: 0}}><i className="fa fa-file"/></a>
        </div>
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
        <div id={"footer"} className={"row"}>
        <div className={"big-foot"}>
            <div style={{display:'flex'}} id={"footer"}>
                  <Link activeClass="active" to="new-home"
                                           spy={true} smooth={true} offset={0} d
                                           uration={50}><p style={{fontSize: '0.9rem', whiteSpace: 'nowrap'}}>
                      Ashley Chang
                  </p></Link>
                <SocialBar />
            </div>

        </div>
            <p style={{fontSize: '0.9rem', textAlign: 'center'}}>
                {"\u00A9 " + new Date().getFullYear().toString() + ", "}coded with with <i style={{color: 'mix(maroon, red)'}} className="fa fa-heart heart"/> and SASS
            </p>
        </div>
    </>
  );
}

export default App;
