import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import bootstrap from '../shared/shared'

export default class Header extends React.Component {
  render() {
    return (
      <bootstrap.Navbar light bg="light">
          <bootstrap.Nav>
          <Link to="/"><bootstrap.Navbar.Brand href="">Welcome</bootstrap.Navbar.Brand></Link>
            <bootstrap.Nav.Item>
              <bootstrap.Nav.Link active href="#" className="Test">Test</bootstrap.Nav.Link>
              </bootstrap.Nav.Item>
          </bootstrap.Nav>
          <bootstrap.Nav>
           <bootstrap.Nav.Item>
              <bootstrap.Nav.Link active href="#" className="">
               <Link to="/login"> <bootstrap.Button outline success >Login</bootstrap.Button></Link>
              </bootstrap.Nav.Link>
            </bootstrap.Nav.Item>
                <bootstrap.Nav.Item>
                  <bootstrap.Nav.Link active href="#" className="">
                  <Link to="/registration"><bootstrap.Button outline success >Registration</bootstrap.Button></Link>
                  </bootstrap.Nav.Link>
                </bootstrap.Nav.Item>
              </bootstrap.Nav>
            
      </bootstrap.Navbar>
   
    )
  }
}