import React from 'react';
import './login.css'
import { Card, Form, Button, Input, Spinner, FormGroup, CardBody } from 'reactstrap';
// import bootstrap from '../../shared/shared'

export default class Login extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      isLoading: false,
      formFields: {
        email: '',
        password: ''
      }
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const isLoading = true
    this.setState({
      isLoading : isLoading
    })
    if(this.state.formFields.email && this.state.formFields.password) {
      fetch('oauth/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: this.state.formFields.email,
          password: this.state.formFields.password,
          grant_type:'password',
          client_id: '2',
          client_secret: 'pK5Qay0VYl0ItsWLnVgIaua7hWAftk4T2ZCrBnqX',  
        })
      })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('access_token', data.access_token);
        const isLoading = false
        this.setState({
          isLoading : isLoading
        })
        console.log(data)
      })
    }
  }

  render() {
    return (
     <div className="Container">
         <Card>
            <CardBody>
              <Form onSubmit={this.handleSubmit} noValidate >
                <FormGroup>
                  <label htmlFor="email">Email address</label>
                  <Input id="email" type="email" onChange={(e) => this.state.formFields.email = e.target.value} placeholder="Enter email" />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="password">Password</label>
                  <Input id="password" type="password" onChange={(e) => this.state.formFields.password = e.target.value} placeholder="Password" />
                </FormGroup>
                <FormGroup>
                </FormGroup>
                <Spinner style={this.state.isLoading ? { width: '3rem', height: '3rem', display:'block' } : {display: 'none'}}  />{' '}
                <Button style={!this.state.isLoading ? { display:'block' } : {display: 'none'}} color="primary" size="lg" type="submit">Submit</Button>
              </Form>
            </CardBody>
         </Card>
     </div>
    )
  }

}
 

