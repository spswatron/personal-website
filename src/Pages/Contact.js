import React from "react";
import Pager from "./Page";
import '../CSS/spinkit.min.css'

function SuccessMessage (props) {
    console.log("success:" + props.i.toString())
    return(
            <div className={"success message"}>
           <div>
               Yay! The message has been sent
           </div>
           <a className={"x"} onClick={() => props.changeStatus(props.i)}><i className="fa fa-times"></i></a>
       </div>
    );
}

function FailureMessage (props) {
    console.log("failure:" + props.i.toString())
    return(
            <div className={"failure message"}>
           <div>
               Aww shucks, there was a hiccup in the send :( You can try again or email me at <a href="mailto:ashley_e_chang@brown.edu" target={"_blank"}><span>ashley_e_chang<span>@</span>brown.edu</span></a>!
           </div>
           <a className={"x"} onClick={() => props.changeStatus(props.i)}><i className="fa fa-times"></i></a>
       </div>
    );
}

function borderColor(bool){
    if(bool){
       return "red"
    } else {
       return "none"
    }
}

function ContactForm(props) {
    let Spinner = require('react-spinkit');
    let loading;
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


    var _ = require('lodash');
    const ranger = _.range(props.statuses.length)
    const messages = ranger.map(
        i => props.statuses[i] ? <SuccessMessage i={i} changeStatus={props.changeStatus}/> :
            <FailureMessage i={i} changeStatus={props.changeStatus}/>)
    return(
        <>
                <label>
                    Name*
                </label>
                <form>
                    <input className={borderColor(props.nameError) + " form-field"} type="text" name="name"
                           value = {props.name}
                           onChange = {props.nameChange}
                           onKeyPress = {props.enterCheck}
                    required />
                </form>
                <label>
                    Email*
                </label>
                <form>
                    <input className={borderColor(props.emailError) + " form-field"} type="text" name="email"
                           value = {props.email}
                           onChange = {props.emailChange}
                           onKeyPress = {props.enterCheck}
                    required/>
                </form>
                <label>
                    Subject
                </label>
                <form>
                    <input className={borderColor(props.subjectError) + " form-field"} type="text" name="subject"
                           value = {props.subject}
                           onChange = {props.subjectChange}
                           onKeyPress = {props.enterCheck}
                    />
                    {/*<Popover*/}
                    {/*  isOpen={props.subjectError}*/}
                    {/*  position={'right'} // preferred position*/}
                    {/*  content={<div>Hi! I'm popover content.</div>}*/}
                    {/*/>*/}
                </form>
                <label>
                    Message*
                </label>
                    <textarea className={borderColor(props.messageError) + " form-field"}
                           name="message"
                           value = {props.message}
                           onChange = {props.messageChange}
                           onKeyPress = {props.enterCheck}
                    required/>
                    {/*<Popover*/}
                    {/*  isOpen={props.messageError}*/}
                    {/*  position={'right'} // preferred position*/}
                    {/*  content={<div>Hi! I'm popover content.</div>}*/}
                    {/*/>*/}
                <div className="row">
                    <div className={"send"}>
                        <button className="contact form-field" type="submit"
                                onClick = {props.handleSubmit}
                        > Send </button>
                        {loading}
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
            nameError: false,
            emailError: false,
            subjectError: false,
            messageError: false,
            circle: false,
            checked: false,
            statuses: []
        }
    }

    nameChange(event) {
        let nameStatus = this.state.nameError
        if(this.state.checked){
            nameStatus = !(event.target.value.length > 0 && event.target.value.length < 600)
        }
        this.setState(
          {
            name: event.target.value,
            nameError: nameStatus
            }
        )
        console.log(this.state)
    }

    emailChange(event) {
        let emailStatus = this.state.emailError
        console.log(this.state)
        if(this.state.checked){
            emailStatus =
             !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(event.target.value))
        }
        this.setState(
          {
            email: event.target.value,
            emailError: emailStatus
            }
        )
        console.log(this.state)
    }

    subjectChange(event) {
        let subjectStatus = this.state.subjectError
        if(this.state.checked){
             subjectStatus = !(event.target.value.length < 998)
        }
        this.setState(
          {
            subject: event.target.value,
            subjectError: subjectStatus
            }
        )
        console.log(this.state)
    }

    messageChange(event) {
        let messageStatus = this.state.messageError
        if(this.state.checked){
             messageStatus = !(event.target.value.length > 0)
        }
        this.setState(
          {
            message: event.target.value,
              messageError: messageStatus
           }
        )
    }

    enterCheck(event) {
    if(event.key === 'Enter'){
      event.preventDefault();
      }
    }

    changeStatus(i) {
        console.log(this.state.statuses)
        this.state.statuses.splice(i, 1);
        console.log(i)
        console.log(this.state.statuses)
        this.setState(
          {
            statuses: this.state.statuses,
            }
        )
    }

    validForm(state){
        const email_check =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)
        const name_check = state.name.length > 0 && state.name.length < 600
        const message_check = state.message.length > 0
        const subject_check = state.subject.length < 1000
        this.setState({
            nameError: !name_check,
            messageError: !message_check,
            subjectError: !subject_check,
            emailError: !email_check,
            checked: true
        })
        return email_check && name_check && message_check && subject_check
    }

    async handleSubmit() {
      if(this.validForm(this.state)) {
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
                                changeStatus = {this.changeStatus.bind(this)}
                                nameError = {this.state.nameError}
                                emailError = {this.state.emailError}
                                subjectError = {this.state.subjectError}
                                messageError = {this.state.messageError}
                            />
                        </div>
                    </div>
                    <div className="column" style = {{marginTop: '6px'}}>
                        <h3 style = {{marginTop: 0}}>The manual method</h3>
                        <div>
                            <div style = {{marginTop: '18.2px', fontSize: '17px', lineHeight: '2rem'}}>
                                If you prefer, you can also
                                <div className={"row"} style={{color: 'transparent', lineHeight: '1rem'}}>
                                    <span> </span>
                                </div>
                                <div className={"row"}>
                                    <span><span><a href="mailto:ashley_e_chang@brown.edu" target={"_blank"}  rel="noopener noreferrer"><i className={"fa fa-envelope"}></i></a></span>  email me at <a rel="noopener noreferrer" href="mailto:ashley_e_chang@brown.edu" target={"_blank"}><span>ashley_e_chang<span>@</span>brown.edu</span></a>,</span>
                                </div>
                                <div className={"row"}>
                                    <span><span><a href="tel:434-849-4438" target={"_blank"}  rel="noopener noreferrer"><i className={"fa fa-phone"}></i></a>  </span>call me at <a rel="noopener noreferrer" href="tel:434-849-4438" target={"_blank"}><span>(434)<span> 849</span>-4438</span></a>, or</span>
                                </div>
                                <div className={"row"}>
                                    <span><span><a href={'https://www.linkedin.com/in/ashley-chang-1080b81a2/'} target='_blank' rel="noopener noreferrer"><i className={"fa fa-linkedin"}></i></a>  </span>message me on linkedin <a rel="noopener noreferrer" href={'https://www.linkedin.com/in/ashley-chang-1080b81a2/'} target='_blank'><span>here</span></a>.</span>
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
        <Pager
            id = {"contact"}
            content = {<Core/>}
        />
        );
    }
}



export default Contact;