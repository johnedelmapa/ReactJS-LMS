import React from 'react'
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import Login from './authentication/login/login'
import Registration from './authentication/registration/registration'
import App from '../App'
import Home from '../components/home/home'

const routing = (
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route exact path="/" render={() => (
          <Redirect to="/Home" />
          )} />
      </div>
    </Router>
  )

  export default routing

