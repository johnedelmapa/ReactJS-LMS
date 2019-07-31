import React, { Component } from 'react';
import './login.css'
import bootstrap from '../../shared/shared'

export default class Login extends React.Component {
  render() {
    return (
     <div className="Container">
         <bootstrap.Card>
            <bootstrap.Card.Body>
              <bootstrap.Card.Text>
              <bootstrap.Form>
                <bootstrap.Form.Group>
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <bootstrap.Form.Input type="email" id="exampleInputEmail1" placeholder="Enter email" />
                  <bootstrap.Form.Text text="muted">We'll never share your email with anyone else.</bootstrap.Form.Text>
                </bootstrap.Form.Group>
                <bootstrap.Form.Group>
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <bootstrap.Form.Input type="password" id="exampleInputPassword1" placeholder="Password" />
                </bootstrap.Form.Group>
                <bootstrap.Form.Group>
                  <bootstrap.Form.Check>
                    <bootstrap.Form.CheckInput type="checkbox" id="exampleCheck1" />
                    <bootstrap.Form.CheckLabel htmlFor="exampleCheck1">Check me out</bootstrap.Form.CheckLabel>
                  </bootstrap.Form.Check>
                </bootstrap.Form.Group>
                <bootstrap.Button primary type="submit">Submit</bootstrap.Button>
              </bootstrap.Form>
              </bootstrap.Card.Text>
            </bootstrap.Card.Body>
         </bootstrap.Card>
     </div>
    )
  }
}