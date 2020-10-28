import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import Navbar from "./NavBar";
import Sidebar from "./Sidebar";
import './Experiences.scss'
import 'react-vertical-timeline-component/style.min.css';


function TimeLine() {
    return(
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date= "August 2019 - May 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<i className="fa fa-graduation-cap"></i>}
          >
            <h3 className="vertical-timeline-element-title">Brown University</h3>
            <h4 className="vertical-timeline-element-subtitle">Providence, RI</h4>
            <p>
              <p>
              GPA 4.0/4.0; B.A. Computer Science, B.A English
              </p>
              <p>
              Beatboxer for Ursa Minors acapella group, Meiklejohn peer advisor, Skorts sketch
                  comedy writer, SEADD (Self Expression for Adults with Developmental Disabilities)
                  instructor
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
              I held office hours and lab hours while also x,y,z! I held office hours and lab hours while also x,y,z!
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
              Lots of python and scala and frickin' Abbby Finereader. What a poggers sort of thing to use
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
              Lots of python and scala and frickin' Abbby Finereader. What a poggers sort of thing to use
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
              Lots of python and scala and frickin' Abbby Finereader. What a poggers sort of thing to use
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
            <p>Founded an Avatar: The Last Airbender club with over thirty-five
                members.
            </p>
        </VerticalTimelineElement>
        </VerticalTimeline>
    );
}
function Core() {
    return(
        <div className="page" id="experiences">
            <div className="container big container small">
                <h1 className={"whiter"}>
                    My Experiences (A Snapshot)
                </h1>
                <div className="row">
                    <h2 className={"row"} style={{justifyContent: 'center'}}>
                        <div>Here are some of the places I've worked (and studied!)</div>
                    </h2>
                    <TimeLine />
                    <p className={"row"} style={{justifyContent: 'center'}}>
                        <div>I hope some day to add a few more places to list, and perhaps there I will meet you!</div>
                    </p>
                </div>
            </div>
        </div>
    );
}

class Experiences extends React.Component {
    render(){
        return(
        <div className={"experiences"}>
            {/*<Stars/>*/}
            <Navbar />
            <div className="top"/>
            <div className={"nav fa"}><Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /></div>
            {/*<SocialSideBar />*/}
            {/*<ArrowSideBar />*/}
            <div className="body">
                <Core />
                <h3 className="socials">
            <a className="link" href="https://github.com/spswatron" target={"_blank"}><i className="fa fa-github"></i></a>
            <a className="link"><i className="fa fa-linkedin"></i></a>
            <a className="link"><i className="fa fa-instagram"></i></a>
            <a className="link"><i className="fa fa-envelope"></i></a>
        </h3>
        </div>
        </div>
        );
    }
}
export default Experiences;