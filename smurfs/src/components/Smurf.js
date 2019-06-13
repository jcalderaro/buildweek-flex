
////////////////////////////////////////

import React from 'react';
import {connect} from 'react-redux';
import {remove} from '../actions';

////////////////////////////////////////

const Smurf = (props) => {
    const smurf = {
        name: props.name,
        age : props.age,
        height: props.height,
        id: props.id
    }

    return (

    <figure className='smurf'>
        <img src='https://imgur.com/Cg8rHJO.png' alt='smurf'/>
        <p>{props.name} Smurf</p>
        <p>{props.age} years old</p>
        <p>{props.height} cm tall</p>
        <button onClick={ () => props.remove(smurf) }>Remove</button>
    </figure>
    
    )
}

////////////////////////////////////////

export default connect(null,{remove})(Smurf);

////////////////////////////////////////

/* Complete */

