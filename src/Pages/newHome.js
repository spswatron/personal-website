import React from "react";
import myFace from './newFace.png';

// function Face(){
//     return <img src={myFace} />;
// }

function NewHome() {
    return(
        <div className={""} id="new-home">
            {/*<div className="container" >*/}
                <h1 className="whiter">
                    Hi, I'm Ashley
                </h1>
                <h2 style={{fontWeight:'normal', margin:0}}>
                        Welcome to my digital home.
                </h2>
            {/*</div>*/}
        </div>
    );
}

export default NewHome;