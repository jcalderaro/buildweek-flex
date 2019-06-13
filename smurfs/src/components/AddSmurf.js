
////////////////////////////////////////

import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addSmurf} from '../actions';

////////////////////////////////////////

class AddSmurf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            smurf : {},
            name: '',
            age: '',
            height: ''
        }
    }

    smurfy = (e) => {
        e.preventDefault();
        this.setState({
            smurf : {
                name : this.state.name,
                age : this.state.age,
                height : this.state.height
            }
        })
    }

    setInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

  render() {
    return (
      <form onSubmit={this.smurfy}>

        <input name='name' type='text' value={this.state.name} onChange={this.setInput}
        placeholder="Fist Name" /><br/>
        
        <input name='name' type='text' value={this.state.name} onChange={this.setInput}
        placeholder="Last Name" /><br/>

        <input name='age' type='text' value={this.state.age} onChange={this.setInput}
        placeholder="Phone Number" /><br/>
        
        <input name='height' type='text' value={this.state.height} onChange={this.setInput}
        placeholder= "Affiliation" /><br/>

        <button onClick={ () => {
            this.setState({
                name: '',
                age : '',
                height : ''
            })

            this.props.addSmurf({
                name: this.state.name, 
                age : this.state.age,
                height:this.state.height,
                })} }>Add A New Contact</button>
      </form>
    )
  }
}

////////////////////////////////////////

export default connect(null,{addSmurf})(AddSmurf);

////////////////////////////////////////

/* Complete */
