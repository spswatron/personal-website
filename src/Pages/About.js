import React from "react";
import myFace from './IMG_3441.jpg';
import Pager from "./Page"
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function Face(){
    return <img src={myFace} />;
}

function Core() {
    return(
        <>
            <h1>
                About Me
            </h1>
            <div className="row">
                <div className="face column">
                    <Face />
                    <h2 style = {{marginTop: '0'}}>
                    </h2>
                </div>
                <div className="column" style = {{marginLeft: '12px', flex: 3}}>
                    <div>
                        <h3 style = {{marginTop:0, marginBottom:'15px', fontSize: '40px'}}>
                            Hi there!
                        </h3>
                        <div style = {{marginTop: '0'}}>
                            My name's Ashley and I'm a sophomore at Brown University studying Computer Science and English.
                        </div>
                        <br />
                        <div style = {{marginTop: '0'}}>
                            I'm a kiddo who loves computers (and that specific snake species), comic books, poems about anthromorphic awakenings, and the great art of boots and cats.
                        </div>
                        <br />
                        <div style = {{marginTop: '0'}}>
                            These days, I've been living it up while studying remotely in Forest, Virginia, although the great art (and loss) of Zoom is not lost on me.
                            {/*So far, I've been able make a website for my acapella group, a book rating aggregator for comic books, and a few other things linked*/}
                            {/*<span> </span><Link activeClass="active" to="projects"*/}
                            {/*               spy={true} smooth={true} offset={-25} d*/}
                            {/*               uration={50}>*/}
                            {/*    here</Link>.*/}

                        </div>
                        <br />
                        <div style = {{marginTop: '0'}}>
                            {/*I spend my nights reading comic books (<span style={{fontStyle: "italic"}}>Y: The Last Man</span>, anyone?). My mornings are dedicated to*/}
                            {/*beatboxing to the Taylor Swift songs my alarms are set to.*/}
                            I guess I made this website to talk a bit about myself, the places I've been and the things I've done. Certainly, all guests on this journey are heartily welcomed.
                        </div>
                        <br />
                        <div style = {{marginTop: '0'}}>
                            {/*If you'd like to, you can contact me <Link activeClass="active" to="contact"*/}
                            {/*               spy={true} smooth={true} offset={-25} d*/}
                            {/*               uration={50}>*/}
                            {/*    here</Link>. 'Twould be delightful :)*/}
                            Without further ado, let's get this ship rolling!
                        </div>
                        <br />
                        <div style = {{marginTop: '0'}}>
                            Thanks a whole ton for visiting my site!
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

class About extends React.Component {
    render(){
        return(
        <Pager
            id = {"about"}
            content = {<Core />}
        />
        );
    }
}

export default About;