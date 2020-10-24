import React from "react";

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            current: false,
        }
    }
    render() {
        return (
            <div className="page" id="projects">
                <div className="container big">
                    <h1 className={"whiter"}>Projects <i className="fa fa-dumbbell"></i></h1>
                </div>
            </div>
        );
    }
}

export default Projects;