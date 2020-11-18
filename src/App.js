import React from 'react';
import './CSS/App.scss';
import './CSS/Contact.scss'
import Navbar from "./Pages/NavBar";
import About from './Pages/About'
import Experiences from "./Pages/Experiences";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import './CSS/stars.css'
import Sidebar from "./Pages/Sidebar";
import NewHome from "./Pages/newHome";

const bottom = <div className="bottom">
    {"\u00A9"} {new Date().getFullYear()} Ashley Chang. Made with SASS and Love
                    <ul>
                        <li><a className="link" href="https://github.com/spswatron" target={"_blank"}  rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
                        <li><a className="link" href={"https://www.linkedin.com/in/ashley-chang-1080b81a2/"} target={"_blank"}  rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></li>
                        <li><a className="link" href="https://www.instagram.com/spswatron/" target={"_blank"}  rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
                        <li><a className="link" href="mailto:ashley_e_chang@brown.edu" target={"_blank"}  rel="noopener noreferrer"><i className="fa fa-envelope"></i></a></li>
                        <li><a className="link" href="/resume" target={"_blank"}  rel="noopener noreferrer"><i className="fa fa-file"></i></a></li>
                    </ul>
                </div>
function SocialBar() {
    return(
        <div className="socials" style={{margin: 0}}>
            <a className="link" href="https://github.com/spswatron" target={"_blank"}  rel="noopener noreferrer"><i className="fa fa-github"></i></a>
            <a className="link" href={"https://www.linkedin.com/in/ashley-chang-1080b81a2/"} target={"_blank"}  rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
            {/*<a className="link" href="https://www.instagram.com/spswatron/" target={"_blank"}  rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>*/}
            <a className="link" href="mailto:ashley_e_chang@brown.edu" target={"_blank"}  rel="noopener noreferrer"><i className="fa fa-envelope"></i></a>
            <a className="link" href="/resume" target={"_blank"}  rel="noopener noreferrer" style={{paddingRight: 0}}><i className="fa fa-file"></i></a>
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
                  <p style={{fontSize: '0.9rem', whiteSpace: 'nowrap'}}>
                      Ashley Chang
                  </p>
                <SocialBar />
            </div>

        </div>
            <p style={{fontSize: '0.9rem', textAlign: 'center'}}>
                {"\u00A9 " + new Date().getFullYear().toString() + ", "}coded with with <i style={{color: 'mix(maroon, red)'}}className="fa fa-heart heart"></i> and SASS
            </p>
        </div>
        {/*{bottom}*/}
    </>
  );
}

export default App;
