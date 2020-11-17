import React from "react";
import ComixMatch from "../Images/comix-match.png";
import ComixMatch1 from "../Images/Comix-Match-1.png";
import ComixMatch2 from "../Images/Comix-Match-2.png";
import ComixMatch3 from "../Images/Comix-Match-3.png";
import GetBlueno from "../Images/get-blueno.png";
import GetBlueno1 from "../Images/Get-Blueno-1.png";
import GetBlueno2 from "../Images/Get-Blueno-2.png";
import GetBlueno3 from "../Images/Get-Blueno-3.png";
import HomeworkTracker from "../Images/homework-tracker.png";
import UrsaMinors from "../Images/ursa-minors.png";
import Shell from "../Images/shell.png";
import Pager from "./Page";
import '../CSS/modal.scss'
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';

function nextSlide(n) {
    if(n < 0){
        return 3 - ((-n) % 3)
    }
    else {
        return n % 3
    }
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
            current: nextSlide(this.state.current + 1)
          })
      }

      moveForward() {
        this.setState( {
            current: nextSlide(this.state.current - 1)
          })
      }

      handleCloseModal () {
        this.setState({ showModal: false });
      }
    render() {
        const slideImage = this.props.images[this.state.current]
        const git = <a href={this.props.git} target={"_blank"} rel="noopener noreferrer">
            <i className="fa fa-github"></i></a>
        const deploy = <a href={this.props.deploy} target={"_blank"} rel="noopener noreferrer">
            <i className="fa fa-link"></i></a>
        return (
            <div className={"image"}>
                <div className={"image-wrapper"}>
                    <div className={"project-links"}>
                        <a onClick={this.handleOpenModal}><i
                            className="fa fa-search-plus"></i></a>
                        {/*<a href={this.props.git} target={"_blank"} rel="noopener noreferrer"><i className="fa fa-github"></i></a>*/}
                    </div>
                   {/*<button onClick={this.handleOpenModal}>Trigger Modal</button>*/}
                    <ReactModal
                       isOpen={this.state.showModal}
                    >
                      <div className={"modal"}>
                            <button className={"exit"} onClick={this.handleCloseModal}><i className="fa fa-times"></i></button>
                                <h2>
                                    {this.props.project}
                                </h2>
                                <hr/>
                                <div className={"img row"}>
                                    <div className={"slideshow arrow"}><a onClick={() => this.moveBack()}><i className="fa fa-chevron-left"></i></a></div>
                                    <div className={"img column"}>
                                        <img src={slideImage}/>
                                    </div>
                                    <div className={"slideshow arrow"}><a onClick={() => this.moveForward()}><i className="fa fa-chevron-right"></i></a></div>
                                </div>
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
                      </div>
                    </ReactModal>
                    <img src={this.props.src}/></div>
            </div>
        )
    }
}


const UrsasImage = <ImageModal
                            project={"Ursa Minors Website"}
                            images = {[UrsaMinors,HomeworkTracker, GetBlueno]}
                            src={UrsaMinors}
                          deploy={"https://ursa-minors.ashley-chang.me/index"}
                          git={"https://github.com/spswatron/homework-tracker"}
                   />
const HomeworkTrackerImage= <ImageModal
                          project={"Homework Tracker"}
                          images = {[UrsaMinors,HomeworkTracker, GetBlueno]}
                            src={HomeworkTracker}
                          deploy={"https://homework-tracker.ashley-chang.me/"}
                          git={"https://github.com/spswatron/homework-tracker"}
                   />
const GetBluenoImage = <ImageModal
                        project={"GetBlueno"}
                        images = {[GetBlueno1, GetBlueno2, GetBlueno3]}
                        src={GetBlueno}
                          deploy={"https://get-blueno.ashley-chang.me/"}
                          git={"https://github.com/spswatron/GetBlueno"}
                   />

const ShellImage = <ImageModal src={Shell}
                          images = {[UrsaMinors,HomeworkTracker, GetBlueno]}
                          project={"Shell"}
                          deploy={"http://comix-match.herokuapp.com/"}
                          git={"https://github.com/spswatron/from-scratch"}
                   />

const ComixMatchImage =  <ImageModal src={ComixMatch1}
                        images = {[ComixMatch1,ComixMatch2, ComixMatch3]}
                        project={"Comix Match"}
                          deploy={"http://comix-match.herokuapp.com/"}
                          git={"https://github.com/spswatron/from-scratch"}
                   />

const SearchImage =  <ImageModal src={ComixMatch}
                        images = {[UrsaMinors,HomeworkTracker, GetBlueno]}
                        project={"Comix Match"}
                          deploy={"http://comix-match.herokuapp.com/"}
                          git={"https://github.com/spswatron/from-scratch"}
                   />

const LastTwo = <div className={"bottom section"}>{HomeworkTrackerImage}{GetBluenoImage}</div>

const ImageList = [ComixMatchImage, ShellImage, UrsasImage, HomeworkTrackerImage, GetBluenoImage, SearchImage]

function Caption(props) {
    return(
        <div className={"caption row"}>
            <div className={"caption column"}>
                {/*<a href={props.link} target={"_blank"}></a>*/}
                <h4><div>{props.name}</div></h4>
            </div>
            <div className={"caption column"}>
            </div>
        </div>
    );
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
               {/*<h2 className={"row"} style={{justifyContent: 'center', marginTop: 0, textAlign: 'center'}}>*/}
               {/*     <div>The things I've done :) Hover over the images for links and repos! </div>*/}
               {/* </h2>*/}
               <div className={"row"}>
                   {ImageList}
               {/*    <Caption name={"Comix Match"} link={'https://comix-match.herokuapp.com/'} />*/}
               {/*    <Image src={ComixMatch}*/}
               {/*           deploy={"http://comix-match.herokuapp.com/"}*/}
               {/*           git={"https://github.com/spswatron/from-scratch"}*/}
               {/*    />*/}
               {/*</div>*/}
               {/*<div className={"row"}>*/}
               {/*   <Caption name={"Shell"} link={'https://get-blueno.ashley-chang.me/'}/>*/}
               {/*    <Image src={Shell}*/}
               {/*           deploy={"https://get-blueno.ashley-chang.me/"}*/}
               {/*           git={"https://github.com/spswatron/GetBlueno"}*/}
               {/*    />*/}
               {/*    <div className={"column"}>*/}
               {/*        <div><strong>Uses: </strong> html, css, javascript </div>*/}
               {/*        <br/>*/}
               {/*        A 2048 clone that uses brunonian bears rather than numbers. Not much to*/}
               {/*        say here, except that everyone I show this game to plays it for more than 20*/}
               {/*        minutes.*/}
               {/*    </div>*/}
               {/*</div>*/}
               {/*<div className={"row"}>*/}
               {/*   <Caption name={"Get Blueno"} link={'https://get-blueno.ashley-chang.me/'}/>*/}
               {/*    <Image src={GetBlueno}*/}
               {/*           deploy={"https://get-blueno.ashley-chang.me/"}*/}
               {/*           git={"https://github.com/spswatron/GetBlueno"}*/}
               {/*    />*/}
               {/*    <div className={"column"}>*/}
               {/*        <div><strong>Uses: </strong> html, css, javascript </div>*/}
               {/*        <br/>*/}
               {/*        A 2048 clone that uses brunonian bears rather than numbers. Not much to*/}
               {/*        say here, except that everyone I show this game to plays it for more than 20*/}
               {/*        minutes.*/}
               {/*    </div>*/}
               {/*</div>*/}
               {/*<div className={"row"}>*/}
               {/*   <Caption name={"Homework Tracker"} link={'https://homework-tracker.ashley-chang.me/'}/>*/}
               {/*    <Image src={HomeworkTracker}*/}
               {/*           deploy={"https://homework-tracker.ashley-chang.me/"}*/}
               {/*           git={"https://github.com/spswatron/homework-tracker"}*/}
               {/*    />*/}
               {/*    <div className={"column"}>*/}
               {/*        insert description 3*/}
               {/*    </div>*/}
               {/*</div>*/}
               {/*<div className={"row"}>*/}
               {/*    <Caption name={"Ursa Minors Website"} link={'https://ursa-minors.ashley-chang.me/index'}/>*/}
               {/*    <Image src={UrsaMinors}*/}
               {/*           deploy={"https://ursa-minors.ashley-chang.me/index"}*/}
               {/*           git={"https://github.com/spswatron/homework-tracker"}*/}
               {/*    />*/}
               {/*    <div className={"column"}>*/}
               {/*        insert description 4*/}
               {/*    </div>*/}
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