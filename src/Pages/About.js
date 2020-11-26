import React from "react";
import myFace from './IMG_3441.jpg';
import Pager from "./Page"

function Face(){
    return <img alt="Ashley wearing a jean jacket and smiling in her backyard in Forest, VA" style={{borderRadius:'5px'}} src={myFace} />;
}

function Core() {
    return(
        <>
            <div className="row">
                <h1 className={"mobile"} style={{textAlign: 'c'}}>
                                About Me <br/>
                </h1>
                <div className="face mobile column">
                    <Face />
                    <h2 style = {{marginTop: '0'}}>
                    </h2>
                </div>
                <div className="words column" style = {{flex: 3}}>
                    <div>
                        <h1 className={"not-mobile"} style={{textAlign: 'left'}}>
                            About Me
                        </h1>
                        <div style = {{marginTop: '0'}}>
                            Hi, my name's Ashley and I'm a sophomore at Brown University studying Computer Science and English.
                        </div>
                        <br />
                        <div style = {{marginTop: '0'}}>
                            I'm a kiddo who loves computers (and that specific snake species), comic books, poems about anthropomorphic awakenings, and the great art of boots and cats.
                        </div>
                        <br />
                        <div style = {{marginTop: '0'}}>
                            These days, I've been living it up while studying remotely in Forest, Virginia, where the great art (and loss) of Zoom is no stranger.
                        </div>
                        <br />
                        <div style = {{marginTop: '0'}}>
                            Thanks a whole ton for visiting my site :)
                        </div>
                        <br />
                        <div style = {{marginTop: '0'}}>
                            Let's get this ship rolling!
                        </div>
                    </div>
                </div>
                <div className="face not-mobile column">
                    <Face />
                    <h2 style = {{marginTop: '0'}}>
                    </h2>
                </div>

            </div>
        </>
    );
}

class About extends React.Component {
    render(){
        return(
        <Pager
            id = {"about"}
            content = {<Core />}
        />
        );
    }
}

export default About;