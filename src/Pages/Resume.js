import React from 'react';
import resume from '../Ashley_Chang_Resume.pdf';
import Pager from "./Page"
import {slide as Menu} from "react-burger-menu";
import '../CSS/Sidebar.scss';

class Navbar extends React.Component {

  render(){
    return(
        <ul className="navbar" >
          <li className="nav1"><a href={"/index"}>
                  Ashley Chang</a></li>
          <li className="clickable">
              <li className="nav3 nav fa"></li>
              <li className="nav2"><a href={"/index#about"}>
                  About</a></li>
              <li className="nav2"><a href={"/index#experiences"}>
                  Experiences</a></li>
              <li className="nav2"><a href={"/index#projects"}>
                  Projects</a></li>
              <li className="nav2"><a href={"/index#contact"}>
                  Contact</a></li>
          </li>
        </ul>
    );
  }
}

class Sidebar extends React.Component {
    constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})
  }
    closeMenu () {
    this.setState({menuOpen: false})
  }
    render() {
        return (
            <Menu
                width={ '220px' }
                isOpen={this.state.menuOpen}
                onStateChange={(state) => this.handleStateChange(state)}
                right>
                <li className="nav3 nav fa"></li>
              <li className="nav2"> <a href={"/index#about"} onClick={() => this.closeMenu()}>About</a></li>
              <li className="nav2"><a href={"/index#experiences"} onClick={() => this.closeMenu()}>Experiences</a></li>
              <li className="nav2"><a href={"/index#projects"} onClick={() => this.closeMenu()}>Projects</a></li>
              <li className="nav2"><a href={"/index#contact"} onClick={() => this.closeMenu()}>Contact</a></li>
            </Menu>
        );
    }
}


class Core extends React.Component{
    render() {
        return (
            <>
                {/*<h1>My Resume </h1>*/}
                <div className="row" style={{display: 'flex', justifyContent: 'center'}}>
                    <h1 style={{marginTop: '2%'}}>My Resume </h1>
                </div>
                {/*<object data={resume} type="application/pdf" style={{width:'100%', height:'100%'}}>*/}
                <iframe src={resume} style={{width:'100%', height:'1150px', overflow: 'auto'}}/>
            </>
        );
    }
}

class Resume extends React.Component{
    render() {
        return (
            <>
            <Navbar/>
            <div className={"nav fa"}><Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /></div>
                <div className="top"/>
            <Pager
                id={"projects"}
                content={<Core/>}
            />
            </>
        );
    }
}

export default Resume;