import React from 'react'
import ReactDOM from 'react-dom'
import { Redirect } from 'react-router';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Login from './authentication/login/login'
import Registration from './authentication/registration/registration'
import App from '../App'
import Home from './home/Home';

const routing = (
    <Router>
      <div>
        {/* <Redirect exact from="/" to="/home" /> */}
        <Route path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/registration" component={Registration} />
      </div>
    </Router>
  )

  export default routing

