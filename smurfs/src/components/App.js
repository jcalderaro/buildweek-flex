
////////////////////////////////////////

import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Smurf from './Smurf';
import SmurfVillage from './SmurfVillage';
import {getSmurfs} from '../actions';
import AddSmurf from './AddSmurf';

const axios = require("axios")

////////////////////////////////////////

class App extends Component {
  state={smurfs:[]}
  render() {
    return (
      <div className="App">
       <Header/>
       <Navbar/>
       <AddSmurf/>
       <Smurf/>
       <SmurfVillage/>
       <Footer/>       
      </div>
    );
  }

  componentDidMount() {
    axios.get('https://localhost:3000/smurfs/').then((response)=> console.log(response)).catch((err)=> console.log(err))
  }
}

////////////////////////////////////////

export default connect(null,{getSmurfs})(App);

////////////////////////////////////////

/* Complete */

