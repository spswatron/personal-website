import React from "react";
import Page from "./Page";
import '../CSS/spinkit.min.css'
import { withAlert } from "react-alert";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'

function SuccessMessage (props) {
    return(
            <div className={"success message"}>
           <div>
               Yay! The message has been sent
           </div>
           <a className={"x"} onClick={() => props.changeStatus()}><i className="fa fa-times"></i></a>
       </div>
    );
}

function FailureMessage (props) {
    return(
            <div className={"failure message"}>
           <div>
               Aww shucks, there was a hiccup in the send :( You can try again or email me at <a href="mailto:ashley_e_chang@brown.edu" target={"_blank"}><span>ashley_e_chang<span>@</span>brown.edu</span></a>!
           </div>
           <a className={"x"} onClick={() => props.changeStatus()}><i className="fa fa-times"></i></a>
       </div>
    );
}
function ContactForm(props) {
    let Spinner = require('react-spinkit');
    let loading;
    let success;
    if(props.circle){
        loading =
            <div className="sk-circle-fade">
                <div className="sk-circle-fade-dot"></div>
                <div className="sk-circle-fade-dot"></div>
                <div className="sk-circle-fade-dot"></div>
                <div className="sk-circle-fade-dot"></div>
                <div className="sk-circle-fade-dot"></div>
                <div className="sk-circle-fade-dot"></div>
                <div className="sk-circle-fade-dot"></div>
                <div className="sk-circle-fade-dot"></div>
                <div className="sk-circle-fade-dot"></div>
                <div className="sk-circle-fade-dot"></div>
                <div className="sk-circle-fade-dot"></div>
                <div className="sk-circle-fade-dot"></div>
            </div>

    } else {
        loading = <></>
    }

    const messages = props.statuses.map(
        m => m ? <SuccessMessage changeStatus={() => props.changeStatus()}/> :
            <FailureMessage changeStatus={() => props.changeStatus()}/>)
    return(
        <>
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
                <div className="row">
                    <div className={"send"}>
                        <button className="contact form-field" type="submit"
                                onClick = {props.handleSubmit}
                        > Send </button>
                        {loading}
                        {/*<i className="fa fa-spinner fa-spin"></i>*/}
                    </div>
                </div>
                {messages}
        </>
    );
}

class Core extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            circle: false,
            statuses: []
        }
    }

    nameChange(event) {
        this.setState(
          {
            name: event.target.value,
            }
        )
    }

    emailChange(event) {
        this.setState(
          {
            email: event.target.value,
            }
        )
    }

    subjectChange(event) {
        this.setState(
          {
            subject: event.target.value,
            }
        )
    }

    messageChange(event) {
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

    changeStatus() {
        this.state.statuses.splice(0, 1)
        this.setState(
          {
            statuses: this.state.statuses,
            }
        )
    }
    async handleSubmit() {
      if( this.state.name !== '' && this.state.email !== '' && !this.state.circle
        ) {
          this.setState({circle: true}, () => {
              fetch("https://ursas-backend.herokuapp.com/submit_personal_form", {
                  mode: 'cors',
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(this.state),
              })
                  .then(res =>
                      this.setState({statuses: [...[res.status===200], ...this.state.statuses], circle: false}))
                  .catch(() => this.setState({statuses: [...[false], ...this.state.statuses], circle: false}))})
          console.log(this.state)
          // const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds))
          // await sleep(10000)
          // if(this.state.circle){
          //     this.setState({statuses: this.state.statuses.concat(false), circle: false})
          // }
      }
  }

    render() {
        // let Spinner = require('react-spinkit')
        // let circleShape =<Async promiseFn={this.state.circle}>
        //                 <Async.Loading><Spinner name='circle' /></Async.Loading>
        //                 <Async.Fulfilled>
        return (
            <>
                <div className="row" style={{display: 'flex', justifyContent: 'center'}}>
                    <h1>Contact </h1>
                </div>
                <div className="row">
                    <div className="column">
                        <h2 style={{marginTop:0}}>Let's keep in touch! </h2>
                        <div>
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
                                circle = {this.state.circle}
                                statuses = {this.state.statuses}
                                changeStatus = {() => this.changeStatus()}
                            />
                        </div>
                    </div>
                    <div className="column" style = {{marginTop: '6px'}}>
                        <h3>The manual method</h3>
                        <div>
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
            </>
        );
    }
}

class Contact extends React.Component {
    render(){
        return(
        <Page
            id = {"contact"}
            content = {<Core/>}
        />
        );
    }
}



export default Contact;