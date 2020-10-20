import React from "react";

function Experiences() {
    return(
        <div className="page" id="experiences">
            <div className="container">
                <h1>
                    Experiences <i className="fa fa-briefcase"></i>
                </h1>
                <div className="row">
                    <div className="column">
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
                <h2 className="socials">
                    <i className="fa fa-github"></i>
                    <i className="fa fa-linkedin"></i>
                    <i className="fa fa-instagram"></i>
                    <i className="fa fa-envelope"></i>
                </h2>
            </div>
        </div>
    );
}

export default Experiences;