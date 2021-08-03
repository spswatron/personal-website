import React from "react";
const myFace = "/images/IMG_3441.jpg";
import Pager from "./Page";
import Image from "next/image";

function Face() {
  return <Image src={myFace} width="auto" height="415" />;
  // return <Image alt="Ashley wearing a jean jacket and smiling in her backyard in Forest, VA" style={{borderRadius:'5px'}} layout="fill" src={myFace} />;
}

function Core() {
  return (
    <>
      <div style={{ marginBottom: "1.2rem" }} className="row">
        <h1 className={"mobile"} style={{ textAlign: "c" }}>
          About Me <br />
        </h1>
        <div className="face mobile column">
          <Image src={myFace} layout="fill" objectFit="contain" />
          <h2 style={{ marginTop: "0" }}></h2>
        </div>
        <div className="words column" style={{ flex: 3 }}>
          <div>
            <h1 className={"not-mobile"} style={{ textAlign: "left" }}>
              About Me
            </h1>
            <div style={{ marginTop: "0" }}>
              Heyo!! My name's Ashley and I'm a junior at Brown University
              studying Computer Science and Creative Writing.
            </div>
            <br />
            <div style={{ marginTop: "0" }}>
              I vibe a whole ton with React (and making radar charts about
              batman), a whole bunch of other things that may wind up in a{" "}
              <a target={"_blank"} href={"/Ashley_Chang_Resume.pdf"}>
                <strong>tech stack,</strong>
              </a>{" "}
              beatboxing, and writing stories that hopefully are as snazzy as
              they are short.
            </div>
            <br />
            <div style={{ marginTop: "0" }}>
              Currently, I'm enjoying my days in America's most metaphorically
              named town, Providence, Rhode Island. Excited to see where I may end up next :)
            </div>
            <br />
            <div style={{ marginTop: "0" }}>
              Thanks a whole ton for visiting my site. Let's get this ship rolling!
            </div>
          </div>
        </div>
        <div className="face not-mobile column">
          <Face />
          <h2 style={{ marginTop: "0" }}></h2>
        </div>
      </div>
    </>
  );
}

class About extends React.Component {
  render() {
    return <Pager id={"about"} content={<Core />} />;
  }
}

export default About;
