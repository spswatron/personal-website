import React from "react";
import myFace from './IMG_3441.jpg';
import Navbar from "./NavBar";
import Sidebar from "./Sidebar";
import './About.scss'
import New_Home from "./newHome";
import Contact from "./Contact";

function Face(){
    return <img src={myFace} />;
}

function Core() {
    return(
        <div className="page" id="about">
            <div className="container big">
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
                            <br/>
                            <br/>
                            <br/>
                        <h3 style = {{marginTop: '0'}}>
                            I'm Ashley, just another kiddo hailing from Forest, Virginia. I'm a
                            student at Brown University, and I'm a self-taught beatboxer.
                        </h3>

                        <h3 style = {{marginTop: '0'}}>
                            I'm Ashley, just another kiddo hailing from Forest, Virginia. I'm a
                            student at Brown University, and I'm a self-taught beatboxer.
                        </h3>

                        <h3 style = {{marginTop: '0'}}>
                            I'm mainly interested in backend development, but also the whole fullstack process is
                            so gripping. CS is so cool because it enables you to sit down, think, and just work through
                            these cool ideas in your head. And hopefully that makes me a little cool too. We'll see.
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
        </div>
    );
}

class About extends React.Component {
    render(){
        return(
        <div className={"about"}>
            {/*<Stars/>*/}
            <Navbar />
            <div className="top"/>
            <div className={"nav fa"}><Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /></div>
            {/*<SocialSideBar />*/}
            {/*<ArrowSideBar />*/}
            <div className="body">
                <Core />
                <h3 className="socials">
            <a className="link" href="https://github.com/spswatron" target={"_blank"}><i className="fa fa-github"></i></a>
            <a className="link"><i className="fa fa-linkedin"></i></a>
            <a className="link"><i className="fa fa-instagram"></i></a>
            <a className="link"><i className="fa fa-envelope"></i></a>
        </h3>
        </div>
        </div>
        );
    }
}

export default About;