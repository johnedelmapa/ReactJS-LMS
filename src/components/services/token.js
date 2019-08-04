import React from 'react';

export default class Token extends React.Component {
    constructor () {
        super()
        this.state = {
            token: '',
        }
    }
      
        componentDidMount() {
          this.getToken();
        }

        getToken() {
          fetch('/oauth/token', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              grant_type:'client_credentials',
              client_id: '2',
              client_secret: 'Pd4Y97chflIRKxGBIegepDd320jM77TZyjEzWwEu'
            })
          }).then((response) => {
            return response.json();
          }).then((data) => {
            localStorage.setItem('token', data.access_token);
          })
        }


        render() {
            return (
                <div></div>
            )
        }
      
}