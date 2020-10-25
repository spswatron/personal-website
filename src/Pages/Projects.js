import React from "react";
import Navbar from "./NavBar";
import Sidebar from "./Sidebar";

class Core extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            current: false,
        }
    }
    render() {
        return (
            <div className="page" id="projects">
                <div className="container big">
                    <h1 className={"whiter"}>Projects <i className="fa fa-dumbbell"></i></h1>
                </div>
            </div>
        );
    }
}

class Projects extends React.Component {
    render(){
        return(
        <div className={"projects"}>
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

export default Projects;