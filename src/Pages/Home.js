import React from 'react';

class Home extends React.Component {
    render(){
        return(
            <div className="page" id="home">
                <div>
                    <div className={"row"} style = {{justifyContent: "center"}}>
                    <h1 style = {{textAlign: "center", display: 'block', marginTop: 0}}>
                        Hi, I'm
                    </h1>
                    <h1 style = {{textAlign: "center", display: 'block', marginTop: 0}}>
                        <span style={{color: '#ccd6f6'}}> Ashley Chang</span>
                    </h1>
                    </div>
                    <p style = {{textAlign: "center", marginTop: 0, marginBottom: 0, maxWidth: '665px'}}>
                        I'm a sophomore at Brown University studying Computer Science and English.
                        I'm an aspiring back-end developer and fiction writer.
                    </p>
                     <div className={"row"} style = {{justifyContent: "center", alignItems:'center'}}>
                         <a href="#contact">
                    <button className="form-field" type="contact" style = {{borderRadius: '10px'}}
                        href="#contact"> Contact Me </button>
                         </a>
                     </div>
                </div>
            </div>
        );
    }
}

export default Home;