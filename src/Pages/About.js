import React from "react";
import myFace from './IMG_3441.jpg';
import Pager from "./Page"

function Face(){
    return <img style={{borderRadius:'5px'}} src={myFace} />;
}

function Core() {
    return(
        <>
            <div className="row">
                <div className="column" style = {{marginRight: '3rem', flex: 3}}>
                    <div>
                        <h1 style={{textAlign: 'left'}}>
                            About Me
                        </h1>
                        <div style = {{marginTop: '0'}}>
                            My name's Ashley and I'm a sophomore at Brown University studying Computer Science and English.
                        </div>
                        <br />
                        <div style = {{marginTop: '0'}}>
                            I'm a kiddo who loves computers (and that specific snake species), comic books, poems about anthromorphic awakenings, and the great art of boots and cats.
                        </div>
                        <br />
                        <div style = {{marginTop: '0'}}>
                            These days, I've been living it up while studying remotely in Forest, Virginia, where the great art (and loss) of Zoom is quite real to me.
                            {/*So far, I've been able make a website for my acapella group, a book rating aggregator for comic books, and a few other things linked*/}
                            {/*<span> </span><Link activeClass="active" to="projects"*/}
                            {/*               spy={true} smooth={true} offset={-25} d*/}
                            {/*               uration={50}>*/}
                            {/*    here</Link>.*/}

                        </div>
                        <br />
                        <div style = {{marginTop: '0'}}>
                            {/*If you'd like to, you can contact me <Link activeClass="active" to="contact"*/}
                            {/*               spy={true} smooth={true} offset={-25} d*/}
                            {/*               uration={50}>*/}
                            {/*    here</Link>. 'Twould be delightful :)*/}
                            Now, without further ado, let's get this ship rolling!
                        </div>
                        <br />
                        <div style = {{marginTop: '0'}}>
                            {/*If you'd like to, you can contact me <Link activeClass="active" to="contact"*/}
                            {/*               spy={true} smooth={true} offset={-25} d*/}
                            {/*               uration={50}>*/}
                            {/*    here</Link>. 'Twould be delightful :)*/}
                            Thanks a whole ton for visiting my site :)
                        </div>
                    </div>
                </div>
                <div className="face column">
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