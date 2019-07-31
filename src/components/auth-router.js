import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Login from './authentication/login/login'
import Registration from './authentication/registration/registration'
import App from '../App'

const routing = (
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
      </div>
    </Router>
  )

  export default routing

