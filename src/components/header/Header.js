import React from 'react';
import './Header.css'
import { Nav, NavItem, NavbarBrand, Navbar, Dropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';
import { Redirect, Link } from 'react-router-dom'

export default class Header extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      dropdownOpen: false,
      id: '',
      name: ''
    }
  }

  async componentDidMount() {
    const id = await localStorage.getItem('user_id');
    const name = await localStorage.getItem('user_name');

    this.setState({
      id: id,
      name: name
    })
  }

  toggle = (event) => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  Logout = () => {
    localStorage.removeItem("user_id")
    localStorage.removeItem("user_name")
    localStorage.removeItem("access_token")
    return <Link to="/login" />
  
  }

  render() {
    return (
      <div className="Container-Header">
      <Navbar light bg="light">
        <NavbarBrand  href="/">ReactJS</NavbarBrand >
          <Nav className={ this.state.id || this.state.name ? 'Header-Hidden' : 'Header-Show'}>
           
     
              <NavItem>
                <Link   className="" to="/login"> <span>Login</span></Link>
              </NavItem>
                <NavItem>
                  <span>|</span>
                </NavItem>
                  <NavItem >
                    <Link  className="" to="/registration"><span>Registration</span></Link>
                  </NavItem>
          </Nav>
            <Nav className={ this.state.id || this.state.name ? 'Header-Show' : 'Header-Hidden'}>
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                 Welcome {this.state.name}
                </DropdownToggle>
                  <DropdownMenu>
                  <DropdownItem onClick={this.Logout}>Logout</DropdownItem>
                  </DropdownMenu>
              </Dropdown>
            </Nav>
      </Navbar>
      </div>
   
    )
  }
}