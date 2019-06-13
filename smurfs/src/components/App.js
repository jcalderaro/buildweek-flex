
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
  
constructor(){
  super()
  this.state={smurfs:[]}
}

componentDidMount() {
  console.log(4)
    axios.get('http://localhost:3333/smurfs/')
    .then((response)=> {
      console.log(response)
      this.setState({smurfs: response.data})
    })
    .catch((err)=> console.log(err))
  }

  render() {
    return (
      <div className="App">
       <Header/>
       <Navbar/>
       <AddSmurf/>
       <Smurf/>
       <SmurfVillage smurfs= {this.state.smurfs}/>
       <Footer/>       
      </div>
    );
  }
}

////////////////////////////////////////

export default connect(null,{getSmurfs})(App);

////////////////////////////////////////

/* Complete */

