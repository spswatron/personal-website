import React from "react";
import Sidebar from "./Sidebar";
import ComixMatch from "../Images/comix-match.png";
import GetBlueno from "../Images/get-blueno.png";
import HomeworkTracker from "../Images/homework-tracker.png";
import UrsaMinors from "../Images/ursa-minors.png";
import Page from "./Page";

function Caption(props) {
    return(
        <div className={"caption row"}>
            <div className={"caption column"}>
                <a href={props.link} target={"_blank"}><h4><div>{props.name}</div></h4></a>
            </div>
            <div className={"caption column"}>
            </div>
        </div>
    );
}

function Image(props) {
    return(
        <div className={"column"}>
            <div className={"image-wrapper"}>
                <i className="fa fa-link"></i>
                <i className="fa fa-github"></i>
                <img src={props.src} /></div>
        </div>
    )
}
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
               <h2 className={"row"} style={{justifyContent: 'center', marginTop: 0, textAlign: 'center'}}>
                    <div>The things I've done :) Hover over the images for links and repos! </div>
                </h2>
               <div className={"row"}>
                   <Caption name={"Comix Match"} link={'https://comix-match.herokuapp.com/'} />
                   <Image src={ComixMatch} />
                   <div className={"column"}>
                       <div><strong>Uses: </strong> python flask, selenium, html, and css</div>
                       <br/>
                       My first foray into the world of webscraping. I used Selenium to acquire the goodreads rating information for
                       over 7000 books (especially comic books).
                       <br /><br />Since goodreads doesn't allow users to sort the books in their shelves
                       by traits such as total reviews, average review, or random, I DIY-ed that.
                   </div>
               </div>
               <div className={"row"}>
                  <Caption name={"Get Blueno"} link={'https://get-blueno.vercel.app/'}/>
                   <Image src={GetBlueno} />
                   <div className={"column"}>
                       <div><strong>Uses: </strong> html, css, javascript </div>
                       <br/>
                       A 2048 clone that uses brunonian bears rather than numbers. Not much to
                       say here, except that everyone I show this game to plays it for more than 20
                       minutes.
                   </div>
               </div>
               <div className={"row"}>
                  <Caption name={"Homework Tracker"} link={'https://homework-tracker.vercel.app/'}/>
                   <Image src={HomeworkTracker} />
                   <div className={"column"}>
                       insert description 3
                   </div>
               </div>
               <div className={"row"}>
                   <Caption name={"Ursa Minors Website"} link={'https://ursas-site.vercel.app/'}/>
                   <Image src={UrsaMinors} />
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