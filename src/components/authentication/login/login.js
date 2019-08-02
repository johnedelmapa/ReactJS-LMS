import React, { Component } from 'react';
import './login.css'
import bootstrap from '../../shared/shared'

export default class Login extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      formFields: {
        email: '',
        password: ''
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

  render() {
    return (
     <div className="Container">
         <bootstrap.Card>
            <bootstrap.Card.Body>
             {<span>{}</span>}
              <bootstrap.Form onSubmit={this.handleSubmit(this.state.formFields)}>
                <bootstrap.Form.Group>
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <bootstrap.Form.Input onChange={this.handleChange}  name="email" type="email" id="exampleInputEmail1" placeholder="Enter email" />
                  <bootstrap.Form.Text  text="muted">We'll never share your email with anyone else.</bootstrap.Form.Text>
                </bootstrap.Form.Group>
                <bootstrap.Form.Group>
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <bootstrap.Form.Input  onChange={this.handleChange} name="password" type="password" id="exampleInputPassword1" placeholder="Password" />
                </bootstrap.Form.Group>
                <bootstrap.Form.Group>
                  <bootstrap.Form.Check>
                    <bootstrap.Form.CheckInput type="checkbox" id="exampleCheck1" />
                    <bootstrap.Form.CheckLabel htmlFor="exampleCheck1">Check me out</bootstrap.Form.CheckLabel>
                  </bootstrap.Form.Check>
                </bootstrap.Form.Group>
                <bootstrap.Button primary outline>Submit</bootstrap.Button>
              </bootstrap.Form>
            </bootstrap.Card.Body>
         </bootstrap.Card>
     </div>
    )
  }



  handleChange (event) {
    let formFields = {...this.state.formFields}
   formFields[event.target.name] = event.target.value;
   this.setState({
     formFields
   });
  }

  handleSubmit (formFields) {
    
  }

}