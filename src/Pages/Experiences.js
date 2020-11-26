import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Pager from "./Page"
import '../CSS/TimeLine.scss'

const SchoolCaption =
                    <>
                        <p>
                            B.A. Computer Science; B.A English <br />GPA 4.0/4.0
                        </p>
                        <p>
                            My wonderful university :) Over here I beatbox for the Ursa Minors acapella group, advise
                            freshmen as a Meiklejohn, write sketch
                            comedy skits for Skorts, teach with SEADD (Self Expression for Adults with Developmental
                            Disabilities), and edit for Cornerstone Literary Magazine
                        </p>
                    </>
const TACaption = <p>
                        I TA for CS0111, Computing Foundations: Data. I spend about 8-9 hours every week holding TA
                        hours,
                        grading assignments, and conducting labs for this 375-person class.
                    </p>
const ChineseResearchCaption = <p>
                                    Using the wonders of pytesseract, scala, and Abby FineReader, I've transcribed thousands of
                                    cables from the Chinese Ministry of the Foreign Affairs during the 1960s.
                                    In the process, I've collected all sorts of metadata.
                                </p>

const KendallHuntCaption = <p>
                                I am the co-author of a university textbook about intercultural communication with
                                Chul Chang. Using the information gathered from many interviews, personal experiences,
                                and historical vantage points, I've written about global relationships
                                and what it means to truly be a caring and thoughtful international citizen.
                            </p>

const BedfordBulletinCaption = <p>
                                Over the course of two years, I've interviewed many different members of Bedford County on a
                                range of topics,
                                including those related to school dynamics and sports, as well as how different members of the
                                community have
                                adapted to the COVID-19 pandemic.
                            </p>

const JFHSCaption = <>
                    <p>
                        Salutatorian. 4.57/4.0 GPA.
                    </p>
                    <p>
                        My high school! I ran cross-country here, founded an Avatar: The Last Airbender club with over
                        35 members (before the show came to Netflix), wrote papers as a Virginia Aerospace Science and
                        Technology
                        Scholar, and was the highest scoring member of our Scholastic Bowl team (we were runner-up in
                        States
                        my junior year!)
                    </p>
                    </>

class TimeLineTab extends React.Component {
    render() {
        return(
          <Tabs>
            <TabList>
            {/*    <div className={"not-mobile"} style={{width: '100%'}}>*/}
            {/*     <h1 style={{margin:0, textAlign:'center', width: '100%'}}>*/}
            {/*    My*/}
            {/*</h1>*/}
            {/*    <h1 style={{margin: 0, textAlign:'center', width: '100%'}}>*/}
            {/*    Experiences*/}
            {/*</h1>*/}
            {/*    </div>*/}
              <Tab><div className={"tab-name"}><i className="fa fa-graduation-cap"/><span> </span> Education</div></Tab>
              <Tab><div className={"tab-name"}><i className="fa fa-briefcase"/><span> </span> Work</div></Tab>
              <Tab><div className={"tab-name"}><i className="fa fa-pencil"/><span> </span> Writing</div></Tab>
            </TabList>
            <TabPanel>
             <TimeLineEducation />
            </TabPanel>
            <TabPanel>
              <TimeLineWork />
            </TabPanel>
              <TabPanel>
              <TimeLineWriting />
            </TabPanel>
          </Tabs>
        );
    }
}

class TimeLineWriting extends React.Component {
   render() {
       return(
           <>

               <div className="timeline-item" date-is="08/2019 - Present">
                   <h2>Kendall Hunt Publishing</h2>
                   {KendallHuntCaption}
               </div>

               <div className="timeline-item" date-is="05/2018 - 08/2020">
                   <h2>Bedford Bulletin</h2>
                   {BedfordBulletinCaption}
               </div>

           </>
       );
   }
}

class TimeLineEducation extends React.Component {
   render() {
       return(
           <>

               <div className="timeline-item" date-is="08/2019 - 05/2023">
                   <h2>Brown University</h2>
                   {SchoolCaption}
               </div>

               <div className="timeline-item" date-is="08/2015 - 05/2019">
                   <h2>Jefferson Forest High School</h2>
                   {JFHSCaption}
               </div>

           </>
       );
   }
}

class TimeLineWork extends React.Component {
   render() {
       return(
           <>
               <div className="timeline-item" date-is="08/2020 - Present">
                   <h2>Brown University Computer Science</h2>
                   {TACaption}
               </div>
               <div className="timeline-item" date-is="01/2020 - Present">
                   <h2>Watson Institute for Public Affairs</h2>
                   {ChineseResearchCaption}
               </div>
           </>
       );
   }
}

function Core() {
    return(
        <>
            <h1>My Experiences</h1>
            <div className="row">
                <TimeLineTab />
            </div>
        </>
    );
}

class Experiences extends React.Component {
    render(){
        return(
        <Pager
            id = {"experiences"}
            content = {<Core/>}
        />
        );
    }
}
export default Experiences;