
////////////////////////////////////////

import React from 'react';
import {connect} from 'react-redux';
import Smurf from './Smurf';

////////////////////////////////////////

class SmurfVillage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className='village'>
               
            </div>
        )
     }
}

function mapStateToProps(state) {
    return {
      smurfs : state.smurfs
    }
  }

////////////////////////////////////////

export default connect(mapStateToProps,null)(SmurfVillage);

////////////////////////////////////////

/* Complete */