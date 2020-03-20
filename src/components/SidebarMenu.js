import React from 'react'
import { push as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";


export default class SidebarMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  componentWillMount() {
    this.unlisten = this.props.history.listen(() => {
      this.closeMenu();
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  toggleMenu() {
    this.setState(state => ({ menuOpen: !state.menuOpen }))
  }

  render() {
    return (
      <div>
        <Menu
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
        >
          <Link to='/'>My works</Link>
          <Link to='/about'>Who I am</Link>
        </Menu>
      </div>
    )
  }
}