import React from "react";

function Experiences() {
    return(
        <div className="page" id="experiences">
            <div className="container">
                <h1 className={"whiter"}>
                    Experiences
                </h1>
                <div className="row">
                    <div className="column">
                        <h2>
                            Education <span> </span><i className="fa fa-briefcase"></i>
                        </h2>
                    </div>
                    <div className="column">
                       Other
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <h2>
                            Work <span> </span><i className="fa fa-briefcase"></i>
                        </h2>
                    </div>
                    <div className="column">
                       Other
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experiences;