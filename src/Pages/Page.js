import React from "react";

class Page extends React.Component {
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

export default Page;