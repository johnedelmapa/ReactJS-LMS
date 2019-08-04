import React from 'react';
import './Header.css'
import { Nav, NavItem, NavLink, NavbarBrand, Navbar } from 'reactstrap';
// import bootstrap from '../shared/shared'

export default class Header extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
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

  render() {
    return (
      <div className="Container-Header">
      <Navbar light bg="light">
        <NavbarBrand  href="/">ReactJS</NavbarBrand >
          <Nav className={ this.state.id || this.state.name ? 'Header-Hidden' : 'Header-Show'}>
           
     
              <NavItem>
                <NavLink active  className="" href="/login"> <span>Login</span></NavLink>
              </NavItem>
                <NavItem>
                  <NavLink><span>|</span></NavLink>
                </NavItem>
                  <NavItem >
                    <NavLink  className="" href="/registration"><span>Registration</span></NavLink>
                  </NavItem>
          </Nav>
          <Nav className={ this.state.id || this.state.name ? 'Header-Show' : 'Header-Hidden'}>
              <NavItem>
                <NavLink active  className="" href="/login"> <span>TEST welcome {}</span></NavLink>
              </NavItem>
          </Nav>
      </Navbar>
      </div>
   
    )
  }
}