import React from 'react'
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import Login from './authentication/login/login'
import Registration from './authentication/registration/registration'
import App from '../App'
import Home from '../components/home/home'

const routing = (

    <Router>
        <Route path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/home" component={Home} />
        <Route exact path="/" render={() => (
          <Redirect to="/Home" />
          )} />
    </Router>
 

  )

  export default routing

