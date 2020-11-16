import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

import Pager from "./Page"
import 'react-vertical-timeline-component/style.min.css';
import '../CSS/TimeLine.scss'

const SchoolCaption =
                    <>
                        <p>
                            B.A. Computer Science; B.A English <br/>GPA 4.0/4.0
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

               <div className="timeline-item" date-is='20-07-1990'>
                   <h2>Kendall Hunt Publishing</h2>
                   {KendallHuntCaption}
               </div>

               <div className="timeline-item" date-is='20-07-1990'>
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

               <div className="timeline-item" date-is='20-07-1990'>
                   <h2>Brown University</h2>
                   {SchoolCaption}
               </div>

               <div className="timeline-item" date-is='20-07-1990'>
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

               <div className="timeline-item" date-is='20-07-1990'>
                   <h2>Brown University Computer Science</h2>
                   {TACaption}
               </div>

               <div className="timeline-item" date-is='20-07-1990'>
                   <h2>Watson Institute for Public Affairs</h2>
                   {ChineseResearchCaption}
               </div>

           </>
       );
   }
}

class TimeLine extends React.Component {
    constructor(props){
        const empty = <></>
        super(props);
        this.state = {
            long: false,
            long_array: [SchoolCaption, TACaption, ChineseResearchCaption,
                KendallHuntCaption, BedfordBulletinCaption, JFHSCaption],
            short_array: [empty, empty, empty, empty, empty, empty]
        }
    }
    render() {
        const captions = this.state.long_array.map
        return (
            // <>
            //     {this.state.long_array}
            // </>
            <VerticalTimeline animate={false}
                              // layout={'1-column-left'}
            >
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="August 2019 - May 2023"
                    style={{background:'transparent'}}
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#F0F0F0'}}
                    icon={<i style={{color: '#F0F0F0'}} className="fa fa-graduation-cap"></i>}
                >
                    <h3 className="vertical-timeline-element-title">Brown University</h3>
                    <h4 className="vertical-timeline-element-subtitle">Providence, RI</h4>
                    <p>
                        <p>
                            B.A. Computer Science; B.A English <br/>GPA 4.0/4.0
                        </p>
                        {this.state.long_array[0]}
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="Brown University Computer Science"
                    date="August 2020-Present"
                    iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
                    icon={<i className="fa fa-briefcase"></i>}
                >
                    <h3 className="vertical-timeline-element-title">Brown University Computer Science</h3>
                    <h4 className="vertical-timeline-element-subtitle">Undergraduate Teaching Assistant</h4>
                    {this.state.long_array[1]}
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="January 2020-Present"
                    iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
                    icon={<i className="fa fa-briefcase"></i>}
                >
                    <h3 className="vertical-timeline-element-title">Watson Institute for Public Affairs</h3>
                    <h4 className="vertical-timeline-element-subtitle">Research Assistant</h4>
                    {this.state.long_array[2]}
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{background: 'rgb(16, 204, 82)', color: '#fff'}}
                    className="vertical-timeline-element--education"
                    date="August 2010-Present"
                    icon={<i className="fa fa-briefcase"></i>}
                    // icon={<StarIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Kendall Hunt Publish Company</h3>
                    <h4 className="vertical-timeline-element-subtitle">Author</h4>
                    {this.state.long_array[3]}
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{background: 'rgb(16, 204, 82)', color: '#fff'}}
                    className="vertical-timeline-element--education"
                    date="August 2010-Present"
                    icon={<i className="fa fa-briefcase"></i>}
                    // icon={<StarIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Bedford Bulletin</h3>
                    <h4 className="vertical-timeline-element-subtitle">Reporter</h4>
                    {this.state.long_array[4]}
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="August 2019 - May 2023"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    icon={<i className="fa fa-graduation-cap"></i>}
                >
                    <h3 className="vertical-timeline-element-title">Jefferson Forest High School</h3>
                    <h4 className="vertical-timeline-element-subtitle">Forest, VA</h4>
                    {this.state.long_array[5]}
                </VerticalTimelineElement>
            </VerticalTimeline>
        );
    }
}
function Core() {
    return(
        <>
            <h1>My Experiences</h1>
            <div className="row">
                {/*<h2 className={"row"} style={{justifyContent: 'center', marginTop: 0, textAlign: 'center'}}>*/}
                {/*    <div>Here are some of the places I've worked (and studied!)</div>*/}
                {/*</h2>*/}
                <TimeLineTab />
                {/*<TimeLine />*/}
                {/*<p className={"row"} style={{justifyContent: 'center', textAlign: 'center'}}>*/}
                {/*    <div>Woo hoo! Thanks for stopping by this part of the tour :)</div>*/}
                {/*</p>*/}
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