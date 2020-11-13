import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import Pager from "./Page"
import 'react-vertical-timeline-component/style.min.css';


function TimeLine() {
    return(
        <VerticalTimeline animate={false}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date= "August 2019 - May 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<i className="fa fa-graduation-cap"></i>}
          >
            <h3 className="vertical-timeline-element-title">Brown University</h3>
            <h4 className="vertical-timeline-element-subtitle">Providence, RI</h4>
            <p>
              <p>
              B.A. Computer Science; B.A English <br/>GPA 4.0/4.0
              </p>
              <p>
                  My wonderful university :) Over here I beatbox for the Ursa Minors acapella group, advise freshmen as a Meiklejohn, write sketch
                  comedy skits for Skorts, teach with SEADD (Self Expression for Adults with Developmental Disabilities), and edit with Cornerstone Literary Magazine
              </p>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="Brown University Computer Science"
            date="August 2020-Present"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<i className="fa fa-briefcase"></i>}
          >
            <h3 className="vertical-timeline-element-title">Brown University Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">Undergraduate Teaching Assistant</h4>
            <p>
              I TA for CS0111, Computing Foundations: Data. I spend about 8-9 hours every week holding TA hours,
                grading assignments, and conducting labs for this 375-person class.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="January 2020-Present"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<i className="fa fa-briefcase"></i>}
          >
            <h3 className="vertical-timeline-element-title">Watson Institute for Public Affairs</h3>
            <h4 className="vertical-timeline-element-subtitle">Research Assistant</h4>
            <p>
              Using the wonders of pytesseract, scala, and Abby FineReader, I've transcribed and garnered metadata from
                thousands of documents about the Chinese Ministry of Foreign Affairs during the 1960s.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            className="vertical-timeline-element--education"
            date="August 2010-Present"
            icon={<i className="fa fa-briefcase"></i>}
            // icon={<StarIcon />}
          >
          <h3 className="vertical-timeline-element-title">Kendall Hunt Publish Company</h3>
            <h4 className="vertical-timeline-element-subtitle">Author</h4>
            <p>
              I am the co-author of a university textbook about intercultural communication with
                Chul Chang. Using the information gathered from many interviews, personal experiences,
                and historical vantage points, I have written about global relationships
                and what it means to truly be a caring and thoughtful international citizen.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            className="vertical-timeline-element--education"
            date="August 2010-Present"
            icon={<i className="fa fa-briefcase"></i>}
            // icon={<StarIcon />}
          >
          <h3 className="vertical-timeline-element-title">Bedford Bulletin</h3>
            <h4 className="vertical-timeline-element-subtitle">Reporter</h4>
            <p>
              Over the course of two years, I've interviewed many different members of Bedford County on a range of topics,
                including those related to school dynamics and sports, as well as how different members of the community have
                adapted to the COVID pandemic.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date= "August 2019 - May 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<i className="fa fa-graduation-cap"></i>}
          >
          <h3 className="vertical-timeline-element-title">Jefferson Forest High School</h3>
            <h4 className="vertical-timeline-element-subtitle">Forest, VA</h4>
            <p>
              Salutatorian. 4.57/4.0 GPA.
                </p>
            <p>
                My high school! I ran cross-country here, founded an Avatar: The Last Airbender club with over
                35 members (before the show came to Netflix), wrote papers as a Virginia Aerospace Science and Technology
                Scholar, and was the highest scoring member of our Scholastic Bowl team (we were runner-up in States
                my junior year!)
            </p>
        </VerticalTimelineElement>
        </VerticalTimeline>
    );
}
function Core() {
    return(
        <>
            <h1>
                My Experiences
            </h1>
            <div className="row">
                <h2 className={"row"} style={{justifyContent: 'center', marginTop: 0, textAlign: 'center'}}>
                    <div>Here are some of the places I've worked (and studied!)</div>
                </h2>
                <TimeLine />
                <p className={"row"} style={{justifyContent: 'center', textAlign: 'center'}}>
                    <div>Thanks a whole lot for checking around on this tour!</div>
                </p>
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