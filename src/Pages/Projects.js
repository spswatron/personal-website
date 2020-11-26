import React from "react";
import ComixMatch1 from "../Images/Comix-Match-1.png";
import ComixMatch2 from "../Images/Comix-Match-2.png";
import ComixMatch3 from "../Images/Comix-Match-3.png";
import GetBlueno1 from "../Images/Get-Blueno-1.png";
import GetBlueno2 from "../Images/Get-Blueno-2.png";
import GetBlueno3 from "../Images/Get-Blueno-3.png";
import Carpe1 from "../Images/Carpe-1.png"
import Carpe2 from "../Images/Carpe-2.png"
import Carpe3 from "../Images/Carpe-3.png"
import Shell1 from "../Images/Shell-1.png";
import Shell2 from "../Images/Shell-2.png";
import Shell3 from "../Images/Shell-3.png";
import UrsaMinors1 from "../Images/Ursa-Minors-1.png";
import UrsaMinors2 from "../Images/Ursa-Minors-2.png";
import UrsaMinors3 from "../Images/Ursa-Minors-3.png";
import Search1 from "../Images/Search-1.png";
import Search2 from "../Images/Search-2.png";
import Search3 from "../Images/Search-3.png";
import Pager from "./Page";
import '../CSS/modal.scss'
import ReactModal from 'react-modal';


function ComixMatchCaption(props){
    let git = <a href={props.git} target={"_blank"} rel="noopener noreferrer">
            <i className="fa fa-github"/></a>
    let deploy = <a href={props.deploy} target={"_blank"} rel="noopener noreferrer">
            <i className="fa fa-link"/></a>
    if (props.git === ""){
            git = <></>
        }
    if (props.deploy === ""){
            deploy = <></>
    }
        return(
            <div className={"content"}>
                <div className={"caption"}><strong>Tech pool: </strong> flask, pandas, selenium, html, and css</div>
                <br/>
                Using the powers of selenium and flask, I created a website that contains the information of over seven thousand books from goodreads' shelves.
                <br /><br />
                This data can be sorted by total reviews, average reviews, random, and other fun things. Goodreads doesn't
                let its users sort its data by these metrics, but I really wanted to find more comic books to read, so this seemed like the natural conclusion.
                Learning that everyone loves Calvin and Hobbes was a delightful bonus.
                <div className={"i row"}>{git} {deploy}</div>
            </div>
        );

}

function UrsaMinorsCaption(props){
    let git = <a href={props.git} target={"_blank"} rel="noopener noreferrer">
            <i className="fa fa-github"/></a>
    let deploy = <a href={props.deploy} target={"_blank"} rel="noopener noreferrer">
            <i className="fa fa-link"/></a>
    if (props.git === ""){
            git = <></>
        }
        if (props.deploy === ""){
            deploy = <></>
        }
        return(
            <div className={"content"}>
                <div className={"caption"}><strong>Thanks to:</strong> react, flask, and the google sheets api</div>
                <br/>
                After staring at our old weebly site for so long, I obtained the blessing of our presidents and developed a new website for my acapella group.
                <br /><br />
                The site has a react front-end and a flask back-end for extra shenanigans, like the contact form. I have finished
                designing the site, but am giving it extra time for the members to fill out a google form with their bios{"\u2014"}but when they do,
                the information on the site will automatically update via the google sheets api. For runtime sake, I'll probably later
                remove this feature, but for now it's fun.
                <div className={"i row"}>{git} {deploy}</div>
            </div>
        );

}

function CarpeCaption(props){
    let git = <a href={props.git} target={"_blank"} rel="noopener noreferrer">
            <i className="fa fa-github"/></a>
    let deploy = <a href={props.deploy} target={"_blank"} rel="noopener noreferrer">
            <i className="fa fa-link"/></a>
    if (props.git === ""){
            git = <></>
        }
        if (props.deploy === ""){
            deploy = <></>
        }
        return(
            <div className={"content"}>
                <div className={"caption"}><strong>Thanks to:</strong> react and the world of npm</div>
                <br/>
                Carpe is a productivity suite I built out as a pick-me-up during quarantine.
                <br /><br />
                I started with my idea for Elapsify, which starts a stopwatch every time a task is entered. I hoped to ramp up a bit of my stress and productivity (and it worked!).
                Then I built out Homework Tracker and Message Center as my own special ways of listing those to-dos.
                Through this personal project, I learned react. Quite fantastic, this library.
                <div className={"i row"}>{git} {deploy}</div>
            </div>
        );

}

function ShellCaption(props){
    let git = <a href={props.git} target={"_blank"} rel="noopener noreferrer">
            <i className="fa fa-github"/></a>
    let deploy = <a href={props.deploy} target={"_blank"} rel="noopener noreferrer">
            <i className="fa fa-link"/></a>
    if (props.git === ""){
            git = <></>
        }
        if (props.deploy === ""){
            deploy = <></>
        }
        return(
            <div className={"content"}>
                <div className={"caption"}><strong>Tech crew:</strong> c, gdb, and the linux man-pages</div>
                <br/>
                I remember when I first saw the characters "cd" I was so confused{"\u2014"}but that made building this
                c-based shell clone even more freeing.
                <br /><br />
                Over the course of this project, I learned to implement the wonders of foreground and background processes,
                input and output redirection, and of course, command execution. It only takes one "cd" to change everything.
                <div className={"i row"}>{git} {deploy}</div>
            </div>
        );

}

function GetBluenoCaption(props){
    let git = <a href={props.git} target={"_blank"} rel="noopener noreferrer">
            <i className="fa fa-github"/></a>
    let deploy = <a href={props.deploy} target={"_blank"} rel="noopener noreferrer">
            <i className="fa fa-link"/></a>
    if (props.git === ""){
            git = <></>
        }
        if (props.deploy === ""){
            deploy = <></>
        }
        return(
            <div className={"content"}>
                <div className={"caption"}><strong>Using: </strong> html, css, javascript</div>
                 <br/>
                 Here lies a 2048 clone that uses brunonian bears rather than numbers. I don't have much to
                  say here, except that everyone I show this game to plays it for more than 20
                   minutes.
                <div className={"i row"}>{git} {deploy}</div>
            </div>
        );

}

function SearchCaption(props){
    let git = <a href={props.git} target={"_blank"} rel="noopener noreferrer">
            <i className="fa fa-github"/></a>
    let deploy = <a href={props.deploy} target={"_blank"} rel="noopener noreferrer">
            <i className="fa fa-link"/></a>
    if (props.git === ""){
            git = <></>
        }
        if (props.deploy === ""){
            deploy = <></>
        }
        return(
            <div className={"content"}>
                <div className={"caption"}><strong>Introducing:</strong> scala, xml, and sbt</div>
                <br/>
                When life gives you a big XML wikis, I guess you slap a little bit of TF-IDF on it and call it a search engine.
                <br /><br />
                Using scala and the pagerank algorithm, I implemented a search engine that takes the pages and pages of
                information in given XML wikis and presents it in the format pictured above. In the process, I focused on time-complexity,
                space complexity, and of course, (soul) searching.
                <div className={"i row"}>{git} {deploy}</div>
            </div>
        );

}

function nextSlide(n) {
    return (n + 3) % 3
}

class ImageModal extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          showModal: false,
          current: 0
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
      }

      handleOpenModal () {
        this.setState({ showModal: true });
      }

      moveBack() {
        this.setState( {
            current: nextSlide(this.state.current - 1)
          })
      }

      moveForward() {
        this.setState( {
            current: nextSlide(this.state.current + 1)
          })
      }

      handleCloseModal () {
        this.setState({ showModal: false });
      }
    render() {
        const slideImage = this.props.images[this.state.current]
        const altTag = this.props.alts[this.state.current]
        return (
            <div className={"image"}>
                <div className={"image-wrapper"}>
                    <div className={"project-links"}>
                        <button className={"not-mobile"} onClick={this.handleOpenModal}><i
                            className="fa fa-search-plus"/></button>
                        <button className={"mobile"} onClick={this.handleOpenModal}><i
                            className="fa fa-info-circle"/></button>
                    </div>
                    <ReactModal
                       isOpen={this.state.showModal}
                    >
                      <div className={"modal"}>
                            <button className={"exit"} onClick={this.handleCloseModal}><i className="fa fa-times"/></button>
                                <h2>
                                    {this.props.project}
                                </h2>
                                <hr/>
                                <div className={"img row"}>
                                    <div className={"slideshow arrow"}><button onClick={() => this.moveBack()}><i className="fa fa-chevron-left"/></button></div>
                                    <div className={"img column"}>
                                        <img src={slideImage} alt={""} loading="lazy"/>
                                    </div>
                                    <div className={"slideshow arrow"}><button onClick={() => this.moveForward()}><i className="fa fa-chevron-right"/></button></div>
                                </div>
                          {this.props.caption}
                            </div>
                    </ReactModal>
                    <img src={this.props.src} alt={altTag} loading="lazy"/></div>
            </div>
        )
    }
}


const UrsasImage = <ImageModal
                            project={"Ursa Minors Website"}
                            images = {[UrsaMinors1,UrsaMinors2, UrsaMinors3]}
                            src={UrsaMinors1}
                          deploy={"https://ursa-minors.ashley-chang.me/index"}
                          git={""}
                            caption={<UrsaMinorsCaption deploy={"https://ursa-minors.ashley-chang.me/index"}
                          git={""}/>}
                            alts={["Ursa Minors acapella group website landing page with photo of the group",
                                "Member Info page for current Ursa Minors", "contact form for website"]}
                   />
const CarpeImage = <ImageModal
                          project={"Carpe"}
                          images = {[Carpe1,Carpe2, Carpe3]}
                            src={Carpe1}
                          deploy={"https://carpe.ashley-chang.me/"}
                          git={"https://github.com/spswatron/homework-tracker"}
                          caption={<CarpeCaption deploy={"https://carpe.ashley-chang.me/"}
                          git={"https://github.com/spswatron/homework-tracker"}/>}
                          alts={["Carpe website with calendar that tasks can be inputted into and taken out of", "Page with" +
                          "rich text editor for to-do list messages", "Elapsify to-do list that starts a stopwatch for every task entered"]}
                   />
const GetBluenoImage = <ImageModal
                        project={"GetBlueno"}
                        images = {[GetBlueno1, GetBlueno2, GetBlueno3]}
                        src={GetBlueno1}
                          deploy={"https://get-blueno.ashley-chang.me/"}
                          git={"https://github.com/spswatron/GetBlueno"}
                        caption={<GetBluenoCaption deploy={"https://get-blueno.ashley-chang.me/"}
                          git={"https://github.com/spswatron/GetBlueno"}/>}
                        alts={["Picture of Brown University bears and president in 2048 clone game", "Game Over message with" +
                        "even more bears in the margins of the site", "Success message for game that says 'You Brought Blueno Back!"]}
                   />

const ShellImage = <ImageModal src={Shell1}
                          images = {[Shell1,Shell2, Shell3]}
                          project={"Shell"}
                          deploy={""}
                          git={""}
                          caption={<ShellCaption deploy={""}
                          git={""}/>}
                          alts={["Screen shot of shell clone that executed the banner command as well as foreground and background" +
                          "signal handling commands", "shell clone with input and output redirection involving usr/bin/calendar",
                              "shell clone executing figlet and banner commands"]}
                   />

const ComixMatchImage =  <ImageModal src={ComixMatch1}
                        images = {[ComixMatch1,ComixMatch2, ComixMatch3]}
                        project={"Comix Match"}
                          deploy={"http://comix-match.herokuapp.com/"}
                          git={"https://github.com/spswatron/from-scratch"}
                        caption={<ComixMatchCaption deploy={"http://comix-match.herokuapp.com/"}
                          git={"https://github.com/spswatron/from-scratch"}/>}
                          alts={["Comix Match homepage with comic books sorted from highest " +
                          "average rating to lowest", "Comix Match with comics sorted by random", "Chix match, " +
                          "which is just Comix Match for chicklit, with books sorted by total reviews"]}
                   />

const SearchImage =  <ImageModal src={Search1}
                        images = {[Search1, Search2, Search3]}
                        project={"Search"}
                          deploy={""}
                          git={""}
                        caption={<SearchCaption deploy={""} git={""}/>}
                           alts={["Results of search results for 'rock,' which are Stage, Nirvana, Granite, " +
                           "Mountaineering, Kyanite, Men at Work, Jamming, Paleogne, and the Grateful Dead",
                          "Results for for 'chocolate,' which are Pan flute, Malvales, Matzo, Merlot, Mandy Patinkin," +
                          "Cuisine of the Midwestern United States, History of the Faroe Islands, Milk, Pennsylvania, and Lavender",
                               "Results for 'california' search and a bit of the 'texas' search"]}
                   />

const ImageList = [ComixMatchImage, UrsasImage, CarpeImage, ShellImage, GetBluenoImage, SearchImage]

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
               <h1>Projects</h1>
               <div className={"row"}>
                   {ImageList}
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