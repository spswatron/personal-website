import React from "react";
import Navbar from "./NavBar";
import Sidebar from "./Sidebar";
import ComixMatch from "../Images/comix-match.png";
import GetBlueno from "../Images/get-blueno.png";
import HomeworkTracker from "../Images/homework-tracker.png";
import UrsaMinors from "../Images/ursa-minors.png";

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
                <div className="container big container small">
                    <h1 className={"whiter"}>Projects <i className="fa fa-dumbbell"></i></h1>
                    <div className={"row"}>
                        <div className={"column"}>
                            <img src={ComixMatch} />
                        </div>
                        <div className={"column"}>
                            Super cool, uses flask and beautiful soup, etc
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"column"}>
                            <img src={GetBlueno} />
                        </div>
                        <div className={"column"}>
                            insert description 2
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"column"}>
                            <img src={HomeworkTracker} />
                        </div>
                        <div className={"column"}>
                            insert description 3
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"column"}>
                            <img src={UrsaMinors} />
                        </div>
                        <div className={"column"}>
                            insert description 4
                        </div>
                    </div>
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
        {/*        <h3 className="socials">*/}
        {/*    <a className="link" href="https://github.com/spswatron" target={"_blank"}><i className="fa fa-github"></i></a>*/}
        {/*    <a className="link"><i className="fa fa-linkedin"></i></a>*/}
        {/*    <a className="link"><i className="fa fa-instagram"></i></a>*/}
        {/*    <a className="link"><i className="fa fa-envelope"></i></a>*/}
        {/*</h3>*/}
        </div>
        </div>
        );
    }
}

export default Projects;