import React from "react";
import myFace from './IMG_3441.HEIC';

function About() {
    return(
        <div className="page" id="about">
            <div className="container">
                <h1 className="whiter">
                    About Me
                </h1>
                <div className="row">
                    <div className="column">
                        {/*<img src={myFace} />*/}
                        Insert Image
                    </div>
                    <div className="column">
                        <h2 style = {{marginTop: '0'}}>
                            I cured world hunger
                        </h2>
                        <h3 style = {{marginTop: '0'}}>
                            Insert random text talking about me, myself, and I, and how great I am
                        </h3>
                    </div>
                </div>
                <h2 >
                       I'm hear tyring to get clout
                </h2>
            </div>
        </div>
    );
}

export default About;