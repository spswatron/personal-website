import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import {Link} from "react-scroll";
import './Sidebar.scss'

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
              <li className="nav2"> <a href={"/about"} onClick={() => this.closeMenu()}>About</a></li>
              <li className="nav2"><a href={"/experiences"} onClick={() => this.closeMenu()}>Experiences</a></li>
              <li className="nav2"><a href={"/projects"} onClick={() => this.closeMenu()}>Projects</a></li>
              <li className="nav2"><a href={"/contact"} onClick={() => this.closeMenu()}>Contact</a></li>
            </Menu>
        );
    }
}

export default Sidebar;