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


function SocialSideBar() {
    return(

        <h3 className="socials">
            <a className="link" href="https://github.com/spswatron" target={"_blank"}><i className="fa fa-github"></i></a>
            <a className="link"><i className="fa fa-linkedin"></i></a>
            <a className="link"><i className="fa fa-instagram"></i></a>
            <a className="link"><i className="fa fa-envelope"></i></a>
            <div className={"line"}></div>
        </h3>
    );
}



class ArrowSideBar extends React.Component {
    constructor(props) {
        super(props);
        this.setState ={
            loc: document.getElementById("arrows"),
            scroll: 'about',
        }

    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll() {
        const loc = document.getElementById("arrows");
        const elementClosest = require('element-closest');
        const p = loc.closest('page')
        console.log(p)
        // this.setState({
        //     scroll: p
        // });
    }

    render() {
        return (
            <h3 className="arrows" id="arrows">
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={300}>
                    <i className="fa fa-chevron-down"></i>
                    <i className="fa fa-chevron-down"></i>
                </Link>
                <div className={"line"}></div>
            </h3>
        );
    }
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
            <div className="page footer" id={"footer"}>
                <label>
                    Made with SASS and <i className="fa fa-heart heart"></i> by Ashley Chang
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
