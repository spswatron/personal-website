import React from "react";
import myFace from './IMG_3441.jpg';
import Navbar from "./NavBar";
import Sidebar from "./Sidebar";

function Face(){
    return <img src={myFace} />;
}

function Core() {
    return(
            <div className="page container big" id = "about">
                <div className={"container small"}>
                <h1>
                    About Me
                </h1>
                <div className="row">
                    <div className="column" style={{flex:2}}>
                        <Face />
                        <h2 style = {{marginTop: '0'}}>
                        </h2>
                    </div>
                    <div className="column" style = {{marginLeft: '12px', flex: 3}}>
                        <div>
                        <h2 style = {{marginTop:0, marginBottom:'15px', fontSize: '40px'}}>
                            Hi again!
                        </h2>
                        {/*<h3 style = {{marginTop: '0'}}>*/}
                        {/*    I'm Ashley,*/}

                        {/*</h3>*/}

                        <h3 style = {{marginTop: '0'}}>
                            My name's Ashley and I'm a student at Brown University studying Computer Science and English.
                        </h3>

                        <h3 style = {{marginTop: '0'}}>
                            I'm mainly interested in back-end development with a bit of full-stack juice thrown in, which is just
                            coding-speak for wanting to make <span style={{fontStyle: "italic"}}>super cool website that do mega-awesome things</span>.
                        </h3>

                        <h3 style = {{marginTop: '0'}}>
                            So far, I've been able make a website for my acapella group, a book rating aggregator for comic books, and a few other things linked <a href={"/projects"}>here</a>.
                        </h3>

                         <h3 style = {{marginTop: '0'}}>
                             I spend my nights reading comic books (<span style={{fontStyle: "italic"}}>Y: The Last Man</span>, anyone?). My mornings are dedicated to
                             beatboxing to the Taylor Swift songs my alarms are set to.
                        </h3>

                         <h3 style = {{marginTop: '0'}}>
                             If you'd like to, you can contact me <a href={"/contact"}>here</a>. 'Twould be delightful :)
                        </h3>

                        <h3 style = {{marginTop: '0'}}>
                            Thanks a whole ton for visiting my site!
                        </h3>

                        {/*<h3 style = {{marginTop: '0'}}>*/}
                        {/*    I'm mainly interested in backend development, but also the whole fullstack process is*/}
                        {/*    so gripping. CS is so cool because it enables you to sit down, think, and just work through*/}
                        {/*    these cool ideas in your head. And hopefully that makes me a little cool too. We'll see.*/}
                        {/*</h3>*/}
                        </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

class About extends React.Component {
    render(){
        return(
        <div className={"projects"}>
            <div className="body">
                <Core />
        </div>
        </div>
        );
    }
}

export default About;