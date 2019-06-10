
////////////////////////////////////////

import React from 'react';
import {connect} from 'react-redux';
import {remove} from '../actions';

////////////////////////////////////////

const Smurf = (props) => {
    const smurf = {
        name: props.smurf.name,
        age : props.smurf.age,
        height: props.smurf.height,
        id: props.smurf.id
    }

    return (

    <figure className='smurf'>
        <img src='https://imgur.com/Cg8rHJO.png' alt='smurf'/>
        <p>{props.smurf.name} Smurf</p>
        <p>{props.smurf.age} years old</p>
        <p>{props.smurf.height} cm tall</p>
        <button onClick={ () => props.remove(smurf) }>Remove</button>
    </figure>
    
    )
}

////////////////////////////////////////

export default connect(null,{remove})(Smurf);

////////////////////////////////////////

/* Complete */

