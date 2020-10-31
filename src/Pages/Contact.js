import React from "react";
import Navbar from "./NavBar";
import Sidebar from "./Sidebar";

function ContactForm(props) {
    return(
        <div className="column">
                <label>
                    Name*
                </label>
                <form>
                    <input className="form-field" type="text" name="name"
                           value = {props.name}
                           onChange = {props.nameChange}
                           onKeyPress = {props.enterCheck}
                    />
                </form>
                <label>
                    Email*
                </label>
                <form>
                    <input className="form-field" type="text" name="name"
                           value = {props.email}
                           onChange = {props.emailChange}
                           onKeyPress = {props.enterCheck}
                    />
                </form>
                <label>
                    Subject
                </label>
                <form>
                    <input className="form-field" type="text" name="name"
                           value = {props.subject}
                           onChange = {props.subjectChange}
                           onKeyPress = {props.enterCheck}
                    />
                </form>
                <label>
                    Message*
                </label>
                <form>
                    <textarea className= "form-field" type="text" name="name"
                           value = {props.message}
                           onChange = {props.messageChange}
                           onKeyPress = {props.enterCheck}
                    />
                </form>
                <button className="contact form-field" type="submit"
                        onClick = {props.handleSubmit}
                > Submit </button>
        </div>
    );
}

class Core extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    }

    nameChange(event) {
        console.log(event.target.value)
        this.setState(
          {
            name: event.target.value,
            }
        )
    }

    emailChange(event) {
        console.log(event.target.value)
        this.setState(
          {
            email: event.target.value,
            }
        )
    }

    subjectChange(event) {
        console.log(event.target.value)
        this.setState(
          {
            subject: event.target.value,
            }
        )
    }

    messageChange(event) {
        console.log(event.target.value)
        this.setState(
          {
            message: event.target.value,
            }
        )
    }

    enterCheck(event) {
    if(event.key === 'Enter'){
      event.preventDefault();
      }
    }

    handleSubmit() {
    if( this.state.name !== '' && this.state.email !== ''
        ) {
      fetch("https://ursas-backend.herokuapp.com/submit_personal_form", {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state),
      })
      .then(res => res.json())}
      // .then(
      //      this.setState({
      //       name: "",
      //       email: "",
      //       subject: "",
      //       message: ""
      //   })

  }

    render() {
        return (
            <div className="page" id="contact">
                <div className="container big">
                    <div className="container small">
                    <div className="row" style={{display: 'flex', justifyContent: 'center'}}>
                    <h1>Contact </h1>
                    </div>
                    <div className="row">
                        <div className="column">
                            <h2>Let's keep in touch! </h2>
                            <div className="row">
                            <ContactForm
                                name = {this.state.name}
                                email = {this.state.email}
                                subject = {this.state.subject}
                                message = {this.state.message}
                                nameChange = {this.nameChange.bind(this)}
                                emailChange = {this.emailChange.bind(this)}
                                subjectChange = {this.subjectChange.bind(this)}
                                messageChange = {this.messageChange.bind(this)}
                                enterCheck ={this.enterCheck.bind(this)}
                                handleSubmit = {this.handleSubmit.bind(this)}
                            />
                            </div>
                        </div>
                        <div className="column" style = {{marginTop: '6px'}}>
                               <h3>The manual method</h3>
                        <div className="row">
                            <div style = {{marginTop: '24px', fontSize: '17px', lineHeight: '2rem'}}>
                                If you prefer, you can also
                                <div className={"row"} style={{color: 'transparent', lineHeight: '1rem'}}>
                                    <span> </span>
                                </div>
                                <div className={"row"}>
                                    <span><span><a href="mailto:ashley_e_chang@brown.edu" target={"_blank"}><i className={"fa fa-envelope"}></i></a></span>  email me at <a href="mailto:ashley_e_chang@brown.edu" target={"_blank"}><span>ashley_e_chang<span>@</span>brown.edu</span></a>,</span>
                                </div>
                                <div className={"row"}>
                                    <span><span><a href="tel:434-849-4438" target={"_blank"}><i className={"fa fa-phone"}></i></a>  </span>call me at <a href="tel:434-849-4438" target={"_blank"}><span>(434)<span> 849</span>-4438</span></a>, or</span>
                                </div>
                                <div className={"row"}>
                                    <span><span><a href={'https://www.linkedin.com/in/ashley-chang-1080b81a2/'} target='_blank'><i className={"fa fa-linkedin"}></i></a>  </span>message me on linkedin <a href={'https://www.linkedin.com/in/ashley-chang-1080b81a2/'} target='_blank'><span>here</span></a>.</span>
                                </div>
                                <div className={"row"}>
                                </div>
                                I'll be sure to respond!

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
        </div>
        );
    }
}

class Contact extends React.Component {
    render(){
        return(
        <div className={"contact"}>
            {/*<Stars/>*/}
            <Navbar />
            <div className="top"/>
            <div className={"nav fa"}><Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /></div>
            {/*<SocialSideBar />*/}
            {/*<ArrowSideBar />*/}
            <div className="body">
                <Core />
        {/*        <h3 className="socials">*/}
        {/*    <a className="link" href="https://github.com/spswatron" target={"_blank"}><i className="fa fa-github"></i></a>*/}
        {/*    <a className="link"><i className="fa fa-linkedin"></i></a>*/}
        {/*    <a className="link"><i className="fa fa-instagram"></i></a>*/}
        {/*    <a className="link"><i className="fa fa-envelope"></i></a>*/}
        {/*</h3>*/}
        </div>
        </div>
        );
    }
}



export default Contact;