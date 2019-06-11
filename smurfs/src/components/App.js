
////////////////////////////////////////

import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import SmurfVillage from './SmurfVillage';
import {getSmurfs} from '../actions';
import AddSmurf from './AddSmurf';

////////////////////////////////////////

class App extends Component {

  render() {
    return (
      <div className="App">
       <Header/>
       <Navbar/>
       <AddSmurf/>
       <SmurfVillage/>
       <Footer/>       
      </div>
    );
  }

  componentDidMount() {
    this.props.getSmurfs('https://localhost:3000/smurfs/')
  }
}

////////////////////////////////////////

export default connect(null,{getSmurfs})(App);

////////////////////////////////////////

/* Complete */

