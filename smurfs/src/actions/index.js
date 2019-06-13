
////////////////////////////////////////

import axios from 'axios';

////////////////////////////////////////

export function getSmurfs(url) {

  console.log('getSmurfs has triggered. ');
  return (dispatch) => {
    dispatch({type : "LOAD"});
    axios.get(url)
         .then( res => {
           console.log("API get request succeeded.: ", res.data);
           dispatch({type: "SUCCESS", payload: res.data})
         })
         .catch( err => {
           console.log(err);
         })
  }
}

////////////////////////////////////////

export function addSmurf(smurf) {
  console.log('addSmurfs has triggered.');
  return (dispatch) => {
    dispatch({type: "ADD"});
    axios.post('https://localhost:3333/smurfs',smurf)
         .then( res => {
            console.log("post successful ", res.data[res.data.length-1]);
            dispatch({
              type: "ADD", payload: res.data[res.data.length-1]
            })
         })
         .catch( err => console.log('error', smurf));
  }
}

////////////////////////////////////////

export function remove(smurf) {
  console.log('remove has triggered', smurf);

  return (dispatch) => {
    dispatch({type: "LOAD"});
    axios.delete(`https://localhost:3000/smurfs/${smurf.id}`)
         .then( res => {
           console.log( 'delete success: ', res.data);
           dispatch({type: "REMOVE", payload: smurf.id})
          } )
         .catch( err => console.log(err));
  }
} 

////////////////////////////////////////

/* Complete */