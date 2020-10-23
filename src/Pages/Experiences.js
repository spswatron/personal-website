import React from "react";

function Experiences() {
    return(
        <div className="page" id="experiences">
            <div className="container">
                <h1 className={"whiter"}>
                    My Experiences (A Snapshot)
                </h1>
                <div className="row">
                    <h2 className={"row"}>
                        <div>Education <i className="fa fa-graduation-cap"></i></div>
                    </h2>
                    <div className="column">
                        <h3 className="no-top">
                            Brown University!!
                        </h3>
                        <p className={"no-top"}>
                            August 2019 - May 2023
                        </p>
                        <p className={"no-top"}>
                            GPA 4.0/4.0
                        </p>
                    </div>
                    <div className="column">
                       <p>Things I did on campus</p>
                        <div>Boots and cats <span><a>(The Ursa Minors</a> </span>
                        acapella group!), editing for Cornerstone Magazine, advising as
                        a Meiklejohn peer mentor, and teaching for SEADD (self-expression for
                        adults with developmental disabilities)</div>
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