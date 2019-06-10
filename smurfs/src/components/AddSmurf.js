
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
        placeholder="Smurf's Name" /><br/>
        <input name='age' type='text' value={this.state.age} onChange={this.setInput}
        placeholder="Smurf's Age" /><br/>
        <input name='height' type='text' value={this.state.height} onChange={this.setInput}
        placeholder= "Smurf's Height" /><br/>

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
                })} }>Add Smurf</button>
      </form>
    )
  }
}

////////////////////////////////////////

export default connect(null,{addSmurf})(AddSmurf);

////////////////////////////////////////

/* Complete */
