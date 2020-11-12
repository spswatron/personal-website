import React from "react";
import Sidebar from "./Sidebar";
import ComixMatch from "../Images/comix-match.png";
import GetBlueno from "../Images/get-blueno.png";
import HomeworkTracker from "../Images/homework-tracker.png";
import UrsaMinors from "../Images/ursa-minors.png";
import Page from "./Page";

class Core extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            current: false,
        }
    }
    render() {
        return (
           <>
               <h1>Projects <i className="fa fa-dumbbell"></i></h1>
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
            </>
        );
    }
}

class Projects extends React.Component {
    render(){
        return(
            <Page
                id={"projects"}
                content={<Core />}
            />
        );
    }
}

export default Projects;