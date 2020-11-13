import React from "react";

class Pager extends React.Component {
    render(){
        return(
            <div className={"page"} id={this.props.id}>
                <div className={"container"}>
                    {this.props.content}
                </div>
            </div>
        );
    }
}

export default Pager;