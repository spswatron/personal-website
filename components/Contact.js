import React from "react";
import Pager from "./Page";
import ReactModal from "react-modal";

class ManualModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      current: 0,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }
  render() {
    return (
      <>
        <button className={"clear"} onClick={this.handleOpenModal}>
          <div className={"manual caption"}>
            <strong>Want to send messages manually?</strong>
          </div>
        </button>
        <ReactModal isOpen={this.state.showModal}>
          <div className={"modal"} style={{ maxWidth: "470px" }}>
            <button className={"exit"} onClick={this.handleCloseModal}>
              <i className="fa fa-times" />
            </button>
            <h2 style={{ display: "flex", justifyContent: "center" }}>
              <div className={"contact-info"}>Contact Information</div>
            </h2>
            <br />
            <div className={"content"} style={{ maxWidth: "24rem" }}>
              <strong>Email: </strong> ashley_e_chang@brown.edu
              <br />
              <br style={{ fontSize: "0.5rem" }} />
              <strong>Phone Number: </strong> 434-849-4438
              <br />
              <br style={{ fontSize: "0.5rem" }} />
              <strong>Github: </strong> spswatron{" "}
              <a
                href="https://github.com/spswatron"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <i className="fa fa-external-link" />
              </a>
              <br />
              <br style={{ fontSize: "0.5rem" }} />
              <strong>Linkedin: </strong> Ashley Chang{" "}
              <a
                href={"https://www.linkedin.com/in/ashley-e-chang/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-external-link" />
              </a>
            </div>
          </div>
        </ReactModal>
      </>
    );
  }
}

function SuccessMessage(props) {
  return (
    <div className={"success message"}>
      <div>Yay! The message has been sent</div>
      <button className={"x clear"} onClick={() => props.changeStatus(props.i)}>
        <i className="fa fa-times" />
      </button>
    </div>
  );
}

function FailureMessage(props) {
  return (
    <div className={"failure message"}>
      <div>
        Aww shucks, there was a hiccup in the send :( You can try again or email
        me at{" "}
        <a
          href="mailto:ashley_e_chang@brown.edu"
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <span>
            ashley_e_chang<span>@</span>brown.edu
          </span>
        </a>
        !
      </div>
      <button className={"x clear"} onClick={() => props.changeStatus(props.i)}>
        <i className="fa fa-times" />
      </button>
    </div>
  );
}

function borderColor(bool) {
  if (bool) {
    return "red";
  } else {
    return "none";
  }
}

function ContactForm(props) {
  let loading;
  if (props.circle) {
    loading = (
      <div className="sk-circle-fade">
        <div className="sk-circle-fade-dot" />
        <div className="sk-circle-fade-dot" />
        <div className="sk-circle-fade-dot" />
        <div className="sk-circle-fade-dot" />
        <div className="sk-circle-fade-dot" />
        <div className="sk-circle-fade-dot" />
        <div className="sk-circle-fade-dot" />
        <div className="sk-circle-fade-dot" />
        <div className="sk-circle-fade-dot" />
        <div className="sk-circle-fade-dot" />
        <div className="sk-circle-fade-dot" />
        <div className="sk-circle-fade-dot" />
      </div>
    );
  } else {
    loading = <></>;
  }

  let _ = require("lodash");
  const ranger = _.range(props.statuses.length);
  const messages = ranger.map((i) =>
    props.statuses[i] ? (
      <SuccessMessage i={i} changeStatus={props.changeStatus} />
    ) : (
      <FailureMessage i={i} changeStatus={props.changeStatus} />
    )
  );
  return (
    <>
      <div className={"row"}>
        <label>Name*</label>
        <input
          className={borderColor(props.nameError) + " form-field"}
          type="text"
          name="name"
          value={props.name}
          onChange={props.nameChange}
          onKeyPress={props.enterCheck}
          required
        />
        <div className={"column"}>
          <label>Email*</label>
          <input
            className={borderColor(props.emailError) + " form-field"}
            type="text"
            name="email"
            value={props.email}
            onChange={props.emailChange}
            onKeyPress={props.enterCheck}
            required
          />
        </div>
      </div>
      <label>Subject</label>
      <input
        className={borderColor(props.subjectError) + " form-field"}
        type="text"
        name="subject"
        value={props.subject}
        onChange={props.subjectChange}
        onKeyPress={props.enterCheck}
      />
      <label>Message*</label>
      <textarea
        className={borderColor(props.messageError) + " form-field"}
        name="message"
        value={props.message}
        onChange={props.messageChange}
        onKeyPress={props.enterCheck}
        required
      />
      <div className="contact bottom row">
        <div className={"send"}>
          <button
            className="contact form-field"
            type="submit"
            onClick={props.handleSubmit}
          >
            {" "}
            Send
          </button>
          {loading}
        </div>
        <ManualModal />
      </div>
      {messages}
    </>
  );
}

class Core extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      nameError: false,
      emailError: false,
      subjectError: false,
      messageError: false,
      circle: false,
      checked: false,
      statuses: [],
    };
  }

  nameChange(event) {
    let nameStatus = this.state.nameError;
    if (this.state.checked) {
      nameStatus = !(
        event.target.value.length > 0 && event.target.value.length < 600
      );
    }
    this.setState({
      name: event.target.value,
      nameError: nameStatus,
    });
  }

  emailChange(event) {
    let emailStatus = this.state.emailError;
    if (this.state.checked) {
      emailStatus = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(event.target.value);
    }
    this.setState({
      email: event.target.value,
      emailError: emailStatus,
    });
  }

  subjectChange(event) {
    let subjectStatus = this.state.subjectError;
    if (this.state.checked) {
      subjectStatus = !(event.target.value.length < 998);
    }
    this.setState({
      subject: event.target.value,
      subjectError: subjectStatus,
    });
  }

  messageChange(event) {
    let messageStatus = this.state.messageError;
    if (this.state.checked) {
      messageStatus = !(event.target.value.length > 0);
    }
    this.setState({
      message: event.target.value,
      messageError: messageStatus,
    });
  }

  enterCheck(event) {}

  changeStatus(i) {
    this.state.statuses.splice(i, 1);
    this.setState({
      statuses: this.state.statuses,
    });
  }

  validForm(state) {
    const email_check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email);
    const name_check = state.name.length > 0 && state.name.length < 600;
    const message_check = state.message.length > 0;
    const subject_check = state.subject.length < 1000;
    this.setState({
      nameError: !name_check,
      messageError: !message_check,
      subjectError: !subject_check,
      emailError: !email_check,
      checked: true,
    });
    return email_check && name_check && message_check && subject_check;
  }

  async handleSubmit() {
    if (this.validForm(this.state)) {
      this.setState({ circle: true }, () => {
        fetch(
          "https://side-projects-one.server.ashley-chang.me/submit_personal_form",
          {
            mode: "cors",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: this.state.name,
              email: this.state.email,
              subject: this.state.subject,
              message: this.state.message.replace(/\n/g, "<br>"),
            }),
          }
        )
          .then((res) =>
            this.setState({
              statuses: [...[res.status === 200], ...this.state.statuses],
              circle: false,
            })
          )
          .catch(() =>
            this.setState({
              statuses: [...[false], ...this.state.statuses],
              circle: false,
            })
          );
      });
    }
  }

  render() {
    return (
      <>
        <div
          className="column"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <h1 style={{ marginBottom: "0rem" }}>Contact </h1>
        </div>
        <div className="form row">
          <div className="contact form">
            <ContactForm
              name={this.state.name}
              email={this.state.email}
              subject={this.state.subject}
              message={this.state.message}
              nameChange={this.nameChange.bind(this)}
              emailChange={this.emailChange.bind(this)}
              subjectChange={this.subjectChange.bind(this)}
              messageChange={this.messageChange.bind(this)}
              enterCheck={this.enterCheck.bind(this)}
              handleSubmit={this.handleSubmit.bind(this)}
              circle={this.state.circle}
              statuses={this.state.statuses}
              changeStatus={this.changeStatus.bind(this)}
              nameError={this.state.nameError}
              emailError={this.state.emailError}
              subjectError={this.state.subjectError}
              messageError={this.state.messageError}
            />
          </div>
        </div>
      </>
    );
  }
}

class Contact extends React.Component {
  render() {
    return <Pager id={"contact"} content={<Core />} />;
  }
}

export default Contact;
