import React from 'react';

export default class Home extends React.Component {
    constructor () {
        super()
        this.state = {
            token: '',
        }
    }
      
        componentDidMount() {
          fetch('/oauth/token', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              grant_type:'client_credentials',
              client_id: '2',
              client_secret: 'pK5Qay0VYl0ItsWLnVgIaua7hWAftk4T2ZCrBnqX'
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