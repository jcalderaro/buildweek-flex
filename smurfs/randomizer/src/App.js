import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import LandingPage from './Components/Guests/LandingPage';
import Login from './Components/Guests/LogIn';
import signUp from './Components/Guests/SignUp';

import Navbar from './Components/Users/Navbar';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className = "App">
          <Navbar />
          <Route exact path = "/" component = {LandingPage}/>
          <div className = "container">
            <Route exact path = "/login" component = {Login}/>
            <Route exact path = "/register" component = {signUp}/>
          </div>

        </div>
      </Router>
    )
  }
}