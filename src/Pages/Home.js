import React from 'react';
import {Link} from "react-scroll";

class Home extends React.Component {
    render(){
        return(
            <div className="page" id="home">
                <div className={"container small"}>
                    <div className={"row"} style = {{justifyContent: "center"}}>
                    <h1 style = {{textAlign: "center", display: 'block', marginTop: 0}}>
                        <span style={{color: '#8892b0'}}>Hi, I'm </span>
                    </h1>
                    <h1 style = {{textAlign: "center", display: 'block', marginTop: 0}}>
                        Ashley Chang!
                    </h1>
                    </div>
                    <p style = {{textAlign: "center", marginTop: 0, marginBottom: 0, maxWidth: '665px'}}>
                        I'm a sophomore at <span style={{color: '#ccd6f6'}}>Brown University</span> studying <span style={{color: '#ccd6f6'}}>Computer Science</span> and English.
                        I'm an aspiring <span style={{color: '#ccd6f6'}}>back-end developer</span> and fiction writer.
                    </p>
                     <div className={"row"} style = {{justifyContent: "center", alignItems:'center'}}>
                         <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={300}><button className="form-field" type="contact" style = {{borderRadius: '10px'}}
                        href="#contact"> Contact Me </button></Link>
                     </div>
                </div>
            </div>
        );
    }
}

export default Home;