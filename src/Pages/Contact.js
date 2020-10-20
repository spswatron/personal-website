import React from "react";

function ContactForm(props) {
    return(
        <div className="column">
            <div className="container" style = {{marginLeft: 0}}>
                <label>
                    Name*
                </label>
                <form>
                    <input className="form-field" type="text" name="name" />
                </form>
                <label>
                    Email*
                </label>
                <form>
                    <input className="form-field" type="text" name="name" />
                </form>
                <label>
                    Subject
                </label>
                <form>
                    <input className="form-field" type="text" name="name" />
                </form>
                <label>
                    Message*
                </label>
                <form>
                    <textarea className= "form-field" type="text" name="name" />
                </form>
                <button className="form-field" type="submit"> Submit </button>
            </div>
        </div>
    );
}

class InfoBlock extends React.Component {
    render(){
        return(
           <div className={"info-block"}>
               <div className="row">
               <div className={"column"}>
                   <i className={"fa fa-" + this.props.icon}></i>
               </div>
               <div className={"column"}>
               Phone:
               </div>
               </div>
           </div>
        );
    }
}

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    }


    render() {
        return (
            <div className="page" id="contact">
                <div className="container">
                    <div className="row">
                    <h1 className={"whiter"}>Contact </h1>
                    </div>
                    <div className="row">
                        <div className="column">
                            <h2>Let's keep in touch! </h2>
                            <div className="row">
                            <div className="column">
                            <   ContactForm />
                            </div>
                            </div>
                        </div>
                        <div className="column">
                               <h3>The manual method</h3>
                        <div className="row">
                            <div style = {{marginTop: '30px', fontSize: '17px', lineHeight: '2rem'}}>
                                If you prefer, you can also
                                <div className={"row"} style={{color: 'transparent', lineHeight: '1rem'}}>
                                    <span> </span>
                                </div>
                                <div className={"row"}>
                                    <span><span><i className={"fa fa-envelope"}></i> </span>email me at <span style={{color: '#ccd6f6'}}>ashley_e_chang<span>@</span>brown.edu</span>,</span>
                                </div>
                                <div className={"row"}>
                                    <span><span><i className={"fa fa-phone"}></i> </span>call me at <span style={{color: '#ccd6f6'}}>(434)<span> 849</span>-4438</span>, or</span>
                                </div>
                                <div className={"row"}>
                                    <span><span><i className={"fa fa-envelope"}></i> </span>email me at <span style={{color: '#ccd6f6'}}>(434)849-4438</span>,</span>
                                </div>
                                <div className={"row"}>
                                </div>
                                and I'll be sure to respond.

                                <div className={"row"} style={{color: 'transparent', lineHeight: '1rem'}}>
                                    <span> </span>
                                </div>
                                Thanks a lot for visiting this site, and I hope you have a fantastic day :)
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}



export default Contact;