import React from 'react';
import './registration.css';
import {  Form, Button, Input , FormGroup } from 'reactstrap';

export default class Registration extends React.Component {
  constructor () {
    super ();
    this.state = {
      people: [],
      id: '',
    };

  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.email.value)
    console.log(event.target.password.value)
  }
 

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit} noValidate >
                <FormGroup>
                  <label htmlFor="email">Email address</label>
                  <Input id="email" type="email" name="email" placeholder="Enter email" />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="password">Password</label>
                  <Input id="password" type="password" name="password" placeholder="Password" />
                </FormGroup>
                <FormGroup>
                </FormGroup>
                <Button size="lg" type="submit">Submit</Button>
              </Form>
      </div>
    )
  }

}

