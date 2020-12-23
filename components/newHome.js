import React from "react";
import {Link} from "react-scroll";

// function Face(){
//     return <img src={myFace} />;
// }
function SocialBar(props) {

    return(

        <h2 className="socials">
            <a className="link"
               style = {{paddingTop: 0}}
               href="https://github.com/spswatron" target={"_blank"}><i className="fa fa-github"></i></a>
            <Link activeClass="active" to="contact"
                                           spy={true} smooth={true} offset={-25} d
                                           uration={50} >
                <i className="fa fa-comment"></i></Link>
            <a className="link"><i className="fa fa-envelope"></i></a>
            <a className="link"><i className="fa fa-linkedin"></i></a>
            <a className="link"><i className="fa fa-file"></i></a>
        </h2>
    );
}

class NewHome extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            clicked: false
        }
    }
    handleClick () {
        this.setState({clicked: !this.state.clicked})
    }
        render() {
        let socials
        if (this.state.clicked){
            socials = <SocialBar />
        }
        else {
            socials = <></>
        }
        return (
            <div className={""} id="new-home">
                <h1 className="whiter">
                    Hi, I'm Ashley
                </h1>
                <div className={"caption"}>
                    <h2 style={{fontWeight: 'normal', margin: 0}}>
                        Welcome to my digital <Link activeClass="active" to="about"
                                           spy={true} smooth={true} offset={-25} duration={50} >
               home.</Link>
                    </h2>
                    {socials}
                </div>
            </div>
        );
    }
}

export default NewHome;