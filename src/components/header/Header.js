import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import bootstrap from '../shared/shared'

export default class Header extends React.Component {

  render() {
    return (
      <div className="Container-Header">
      <bootstrap.Navbar light bg="light">
     
        <bootstrap.Navbar.Brand href="/">ReactJS</bootstrap.Navbar.Brand>
        

          <bootstrap.Nav>

           <bootstrap.Nav.Item>
              <bootstrap.Nav.Link active  className="" href="/login"> <span>Login</span></bootstrap.Nav.Link>
            </bootstrap.Nav.Item>

            <bootstrap.Nav.Item>
              <bootstrap.Nav.Link><span>|</span></bootstrap.Nav.Link>
            </bootstrap.Nav.Item>

                <bootstrap.Nav.Item >
                  <bootstrap.Nav.Link  className="" href="/registration"><span>Registration</span></bootstrap.Nav.Link>
                </bootstrap.Nav.Item>

              </bootstrap.Nav>
      </bootstrap.Navbar>
      </div>
   
    )
  }
}