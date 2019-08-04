import React from 'react';
import './login.css'
import { Card, Form, Button, Input, Spinner, FormGroup, CardBody } from 'reactstrap';
import ErrorHandling from '../core/errorHandling';


export default class Login extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

   handleSubmit = async (event) => {
    event.preventDefault();
    const isLoading = true
    this.setState({ isLoading : isLoading })
    if(event.target.email.value && event.target.password.value) {
      const token = await fetch('oauth/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: event.target.email.value,
          password: event.target.password.value,
          grant_type:'password',
          client_id: '2',
          client_secret: 'Pd4Y97chflIRKxGBIegepDd320jM77TZyjEzWwEu',  
        })
      })
      await token.json().then((data) => {
        if(data.error) {
          console.log(data.error)
        } else {
          console.log(data)
          localStorage.setItem('access_token', data.access_token);
          this.setState({
            isLoading : isLoading,
          })
        }   
      }).catch((error) => {
        console.log('this is an: '.concat(error))
      })

      fetch('/api/user', {
        method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer '.concat(localStorage.getItem('access_token')), 
          },
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if(data.message) {
          console.log(data.message)
        }else{
          const isLoading = false
          this.setState({ isLoading : isLoading })
          localStorage.setItem('user_id', data.id);
          localStorage.setItem('user_name', data.name);
        }
        
      
       
      }).catch((error) => {
          console.log('this is an: '.concat(error))
    })
    }
    
  }

  render() {
    return (
    <ErrorHandling>
     <div className="Container">
         <Card>
            <CardBody>
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
                <Spinner style={this.state.isLoading ? { width: '3rem', height: '3rem', display:'block' } : {display: 'none'}}  />{' '}
                <Button style={!this.state.isLoading ? { display:'block' } : {display: 'none'}} color="primary" size="lg" type="submit">Submit</Button>
              </Form>
            </CardBody>
         </Card>
     </div>
     </ErrorHandling>
    )
  }

}
 

