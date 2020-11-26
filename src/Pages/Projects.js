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
                {/*My first foray into the world of webscraping. I used Selenium to acquire the goodreads rating information for*/}
                {/*over 7000 books (especially comic books).*/}
                {/*<br /><br />Since goodreads doesn't allow users to sort the books in their shelves*/}
                {/*by traits such as total reviews, average review, or random, I DIY-ed that.*/}
                This summer, I dedicated a chunk of time to finding more comic books to read.
                <br /><br />
                Using data I webscraped from goodreads' book shelves, I created a website in which this information
                could now finally be sorted by total reviews, average reviews, random, and other fun things. I love
                Calvin Hobbes, so this was delightful.
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
                <div className={"caption"}><strong>Tech pool: </strong> react, flask</div>
                <br/>
                I developed a website for my acapella group with a react front-end and a flask back-end
                (for emails and etcetera).
                <br /><br />
                Although I removed the feature now for runtime sake, for a while, in order to encourage
                the different members in my group to fill out the Google Form for member info, I
                populated the Members Info sections with information from the Google Sheet with their form response.
                Using the flask backend and the Google Sheets API, I made it so that if a person filled in a google form
                and then reloaded the Members Info page, the information would automatically update on the site.
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
                <div className={"caption"}><strong>Uses: </strong> html, css, javascript</div>
                 <br/>
                 A 2048 clone that uses brunonian bears rather than numbers. Not much to
                  say here, except that everyone I show this game to plays it for more than 20
                   minutes.
                <div className={"i row"}>{git} {deploy}</div>
            </div>
        );

}


function nextSlide(n) {
    return (n + 3) % 3
}

class ImageModal extends React.Component {
    constructor () {
        super();
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
        let git = <a href={this.props.git} target={"_blank"} rel="noopener noreferrer">
            <i className="fa fa-github"/></a>
        let deploy = <a href={this.props.deploy} target={"_blank"} rel="noopener noreferrer">
            <i className="fa fa-link"/></a>
        if (this.props.git === ""){
            git = <></>
        }
        if (this.props.deploy === ""){
            deploy = <></>
        }
        return (
            <div className={"image"}>
                <div className={"image-wrapper"}>
                    <div className={"project-links"}>
                        <button className={"not-mobile"} onClick={this.handleOpenModal}><i
                            className="fa fa-search-plus"/></button>
                        <button className={"mobile"} onClick={this.handleOpenModal}><i
                            className="fa fa-info-circle"/></button>
                        {/*<a href={this.props.git} target={"_blank"} rel="noopener noreferrer"><i className="fa fa-github"></i></a>*/}
                    </div>
                   {/*<button onClick={this.handleOpenModal}>Trigger Modal</button>*/}
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
                                    <div className={"slideshow arrow"}><button onClick={() => this.moveBack()}><i className="fa fa-chevron-left"></i></button></div>
                                    <div className={"img column"}>
                                        <img src={slideImage} loading="lazy"/>
                                    </div>
                                    <div className={"slideshow arrow"}><button onClick={() => this.moveForward()}><i className="fa fa-chevron-right"></i></button></div>
                                </div>
                          {this.props.caption}
                            </div>
                    </ReactModal>
                    <img src={this.props.src} loading="lazy"/></div>
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
                   />
const CarpeImage = <ImageModal
                          project={"Carpe"}
                          images = {[Carpe1,Carpe2, Carpe3]}
                            src={Carpe1}
                          deploy={"https://carpe.ashley-chang.me/"}
                          git={"https://github.com/spswatron/homework-tracker"}
                          caption={<ComixMatchCaption deploy={"https://carpe.ashley-chang.me/"}
                          git={"https://github.com/spswatron/homework-tracker"}/>}
                   />
const GetBluenoImage = <ImageModal
                        project={"GetBlueno"}
                        images = {[GetBlueno1, GetBlueno2, GetBlueno3]}
                        src={GetBlueno1}
                          deploy={"https://get-blueno.ashley-chang.me/"}
                          git={"https://github.com/spswatron/GetBlueno"}
                        caption={<GetBluenoCaption deploy={"https://get-blueno.ashley-chang.me/"}
                          git={"https://github.com/spswatron/GetBlueno"}/>}
                   />

const ShellImage = <ImageModal src={Shell1}
                          images = {[Shell1,Shell2, Shell3]}
                          project={"Shell"}
                          deploy={""}
                          git={""}
                          caption={<ComixMatchCaption deploy={""}
                          git={""}/>}
                   />

const ComixMatchImage =  <ImageModal src={ComixMatch1}
                        images = {[ComixMatch1,ComixMatch2, ComixMatch3]}
                        project={"Comix Match"}
                          deploy={"http://comix-match.herokuapp.com/"}
                          git={"https://github.com/spswatron/from-scratch"}
                        caption={<ComixMatchCaption deploy={"http://comix-match.herokuapp.com/"}
                          git={"https://github.com/spswatron/from-scratch"}/>}
                   />

const SearchImage =  <ImageModal src={Search1}
                        images = {[Search1, Search2, Search3]}
                        project={"Search"}
                          deploy={""}
                          git={""}
                        caption={<ComixMatchCaption deploy={""} git={""}/>}
                   />

const LastTwo = <div className={"bottom section"}>{CarpeImage}{GetBluenoImage}</div>

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