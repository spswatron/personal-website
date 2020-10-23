import React from "react";
import myFace from './IMG_0837.JPG';

function Face(){
    return <img src={myFace} />;
}

function About() {
    return(
        <div className="page" id="about">
            <div className="container">
                <h1 className="whiter">
                    About Me
                </h1>
                <div className="row">
                    <div className="column" style={{backgroundImage: myFace}}>
                        <Face />
                        <h2 style = {{marginTop: '0'}}>
                        </h2>
                    </div>
                    <div className="column">
                        <h2 style = {{marginTop: '0'}}>
                            Hi again!
                        </h2>
                        <h3 style = {{marginTop: '0'}}>
                            I'm Ashley, just another kiddo hailing from Forest, Virginia. I'm a
                            student at Brown University, and I'm a self-taught beatboxer always on
                            the lookout to learn other cool things. Like web design and software development.
                            Dag nab that stuff's cool.
                        </h3>

                        <h3 style = {{marginTop: '0'}}>
                            I'm mainly interested in backend development, but also the whole fullstack process is
                            so gripping. CS is so cool because it enables you to sit down, think, and just work through
                            these cool ideas in your head. And hopefully that makes me a little cool too. We'll see.
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;