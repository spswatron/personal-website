import React from "react";

function ContactForm(props) {
    return(
        <div className="column">
            <div className="container" style = {{marginLeft: 0}}>
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
                <button className="form-field" type="submit"
                        onClick = {props.handleSubmit}
                > Submit </button>
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
        // && this.state.message !== '') {
        ) {
      console.log("fetching python localhost");
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
                <div className="container">
                    <div className="row">
                    <h1 className={"whiter"}>Contact </h1>
                    </div>
                    <div className="row">
                        <div className="column">
                            <h2>Let's keep in touch! </h2>
                            <div className="row">
                            <div className="column">
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
                                    <span><span><i className={"fa fa-envelope"}></i>  </span>email me at <span style={{color: '#ccd6f6'}}>ashley_e_chang<span>@</span>brown.edu</span>,</span>
                                </div>
                                <div className={"row"}>
                                    <span><span><i className={"fa fa-phone"}></i>  </span>call me at <span style={{color: '#ccd6f6'}}>(434)<span> 849</span>-4438</span>, or</span>
                                </div>
                                <div className={"row"}>
                                    <span><span><i className={"fa fa-linkedin"}></i>  </span>message me on linkedin <a href={'https://www.linkedin.com/in/ashley-chang-1080b81a2/'}><span style={{color: '#ccd6f6'}}>here</span></a>.</span>
                                </div>
                                <div className={"row"}>
                                </div>
                                I'll be sure to respond.

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