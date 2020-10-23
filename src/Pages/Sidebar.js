import React from 'react';
import { slide as Menu } from 'react-burger-menu';

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
                <li className="nav2"><a onClick={() => this.closeMenu()} href="#about">About</a></li>
                <li className="nav2"><a onClick={() => this.closeMenu()} href="#experiences">Experiences</a></li>
                <li className="nav2"><a onClick={() => this.closeMenu()} href="#projects">Projects</a></li>
                <li className="nav2"><a onClick={() => this.closeMenu()} href="#contact">Contact</a></li>
            </Menu>
        );
    }
}

export default Sidebar;
