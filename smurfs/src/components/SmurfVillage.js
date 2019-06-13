
////////////////////////////////////////

import React from 'react';
import {connect} from 'react-redux';
import Smurf from './Smurf';
const axios = require('axios')

////////////////////////////////////////

class SmurfVillage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount(){
        axios.get('http:localhost:3333/smurfs')
        .then((response) => {console.log(response)}) 
        .catch((err) => {console.log(err)})
    }

    render() {
        console.log(this.state)
        return (
            <div className='village'>
            
            </div>
        )
     }
}

function mapStateToProps(state) {
    const { smurfs } = state
    return {
      smurfs : state.smurfs
    }
  }

////////////////////////////////////////

export default connect(mapStateToProps,null)(SmurfVillage);

////////////////////////////////////////

/* Complete */