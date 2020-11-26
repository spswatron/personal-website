import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-scroll'
import '../CSS/Sidebar.scss';

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
              <li className="nav3 nav fa"/>
              <li className="nav2"> <Link activeClass="active" to="about" spy={true} smooth={true} offset={-35} duration={300} onClick={() => this.closeMenu()}>About</Link></li>
              <li className="nav2"><Link activeClass="active" to="experiences" spy={true} smooth={true} offset={-25}  duration={300} onClick={() => this.closeMenu()}>Experiences</Link></li>
              <li className="nav2"><Link activeClass="active" to="projects" spy={true} smooth={true} offset={-25} duration={300} onClick={() => this.closeMenu()}>Projects</Link></li>
              <li className="nav2"><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={300} onClick={() => this.closeMenu()}>Contact</Link></li>
            </Menu>
        );
    }
}
export default Sidebar;