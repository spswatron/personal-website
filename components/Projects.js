import React from "react";
import Image from "next";
import ReactModal from "react-modal";
import Pager from "./Page";
import projectsJson from "./projectJson";

function Caption(props) {
  let git = (
    <a href={props.git} target={"_blank"} rel="noopener noreferrer">
      <i className="fa fa-github" />
    </a>
  );
  let deploy = (
    <a href={props.deploy} target={"_blank"} rel="noopener noreferrer">
      <i className="fa fa-link" />
    </a>
  );
  if (props.git === "") {
    git = <></>;
  }
  if (props.deploy === "") {
    deploy = <></>;
  }
  return (
    <>
      <div className={"content"}>
        {props.content}
        <div className={"i row"}>
          {git} {deploy}
        </div>
      </div>
    </>
  );
}

function nextSlide(n) {
  return (n + 3) % 3;
}

class ImageModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      current: 0,
    };

    this.modalRef = React.createRef();
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
    new Promise((r) => setTimeout(r, 500)).then(() => {});
    // document.addEventListener("click", this.handleClickOutside.bind(this));
  }

  moveBack() {
    this.setState({
      current: nextSlide(this.state.current - 1),
    });
  }

  moveForward() {
    this.setState({
      current: nextSlide(this.state.current + 1),
    });
  }

  handleClickOutside(e) {
    if (this.modalRef.current.contains(e.target)) {
      return;
    }
    if (!this.modalRef.current.contains(e.target)) {
      this.handleCloseModal();
    }
  }

  handleCloseModal() {
    this.setState({ showModal: false });
    document.removeEventListener("click", this.handleClickOutside.bind(this));
  }

  render() {
    const slideImage = this.props.project.images[this.state.current];
    const altTag = this.props.project.imageCaptions[this.state.current];

    return (
      <div className={"image"}>
        <div className={"image-wrapper"}>
          <div className={"project-links"}>
            <button className={"not-mobile"} onClick={this.handleOpenModal}>
              <i className="fa fa-search-plus" />
            </button>
            <button className={"mobile"} onClick={this.handleOpenModal}>
              <i className="fa fa-info-circle" />
            </button>
          </div>
          <ReactModal ref={this.modalRef} isOpen={this.state.showModal}>
            <div className={"modal"}>
              <button className={"exit"} onClick={this.handleCloseModal}>
                <i className="fa fa-times" />
              </button>
              <h2>{this.props.project.name}</h2>
              <hr />
              <div className={"img row"}>
                <div className={"slideshow arrow"}>
                  <button onClick={() => this.moveBack()}>
                    <i className="fa fa-chevron-left" />
                  </button>
                </div>
                <div className={"img column"}>
                  <img src={slideImage} alt={altTag} />
                </div>
                <div className={"slideshow arrow"}>
                  <button onClick={() => this.moveForward()}>
                    <i className="fa fa-chevron-right" />
                  </button>
                </div>
              </div>
              <Caption
                git={this.props.project.git}
                deploy={this.props.project.deploy}
                content={this.props.project.caption}
              />
            </div>
          </ReactModal>
          <img
            src={this.props.project.images[0]}
            alt={this.props.project.imageCaptions[0]}
          />
        </div>
      </div>
    );
  }
}

class Core extends React.Component {
  render() {
    const ImageList = this.props.imageList.map((j, i) => (
      <ImageModal key={i} project={j} />
    ));
    return (
      <>
        <h1>Projects</h1>
        <div className={"row"}>{ImageList}</div>
      </>
    );
  }
}

function Projects() {
  return (
    <Pager
      id={"projects"}
      imageList={projectsJson}
      content={<Core imageList={projectsJson} />}
    />
  );
}

export default Projects;
