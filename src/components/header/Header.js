import React from 'react';
import './Header.css'
import { Nav, NavItem, NavLink, NavbarBrand, Navbar } from 'reactstrap';
// import bootstrap from '../shared/shared'

export default class Header extends React.Component {

  render() {
    return (
      <div className="Container-Header">
      <Navbar light bg="light">
        <NavbarBrand  href="/">ReactJS</NavbarBrand >
          <Nav>

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
      </Navbar>
      </div>
   
    )
  }
}