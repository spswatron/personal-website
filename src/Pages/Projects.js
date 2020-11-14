import React from "react";
import Sidebar from "./Sidebar";
import ComixMatch from "../Images/comix-match.png";
import GetBlueno from "../Images/get-blueno.png";
import HomeworkTracker from "../Images/homework-tracker.png";
import UrsaMinors from "../Images/ursa-minors.png";
import Pager from "./Page";

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
                <div className={"project-links"}>
                    <a href={props.deploy} target={"_blank"}><i className="fa fa-link"></i></a>
                    <a href={props.git} target={"_blank"}><i className="fa fa-github"></i></a>
                </div>
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
                   <Image src={ComixMatch}
                          deploy={"http://comix-match.herokuapp.com/"}
                          git={"https://github.com/spswatron/from-scratch"}
                   />
                   <div className={"column"}>
                       <div><strong>Tech pool: </strong> flask, pandas, selenium, html, and css</div>
                       <br/>
                       {/*My first foray into the world of webscraping. I used Selenium to acquire the goodreads rating information for*/}
                       {/*over 7000 books (especially comic books).*/}
                       {/*<br /><br />Since goodreads doesn't allow users to sort the books in their shelves*/}
                       {/*by traits such as total reviews, average review, or random, I DIY-ed that.*/}
                       This summer, I dedicated a chunk of time to finding more comic books to read.
                       <br /><br />
                       Using data I webscraped from goodreads' book shelves, I created a website in which this information
                       could now finally be sorted by total reviews, average reviews, random, and other fun things. I love
                       Calvin Hobbes, so this was delightful.
                   </div>
               </div>
               <div className={"row"}>
                  <Caption name={"Get Blueno"} link={'https://get-blueno.ashley-chang.me/'}/>
                   <Image src={GetBlueno}
                          deploy={"https://get-blueno.ashley-chang.me/"}
                          git={"https://github.com/spswatron/GetBlueno"}
                   />
                   <div className={"column"}>
                       <div><strong>Uses: </strong> html, css, javascript </div>
                       <br/>
                       A 2048 clone that uses brunonian bears rather than numbers. Not much to
                       say here, except that everyone I show this game to plays it for more than 20
                       minutes.
                   </div>
               </div>
               <div className={"row"}>
                  <Caption name={"Homework Tracker"} link={'https://homework-tracker.ashley-chang.me/'}/>
                   <Image src={HomeworkTracker}
                          deploy={"https://homework-tracker.ashley-chang.me/"}
                          git={"https://github.com/spswatron/homework-tracker"}
                   />
                   <div className={"column"}>
                       insert description 3
                   </div>
               </div>
               <div className={"row"}>
                   <Caption name={"Ursa Minors Website"} link={'https://ursa-minors.ashley-chang.me/index'}/>
                   <Image src={UrsaMinors}
                          deploy={"https://ursa-minors.ashley-chang.me/index"}
                          git={"https://github.com/spswatron/homework-tracker"}
                   />
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
            <Pager
                id={"projects"}
                content={<Core />}
            />
        );
    }
}

export default Projects;