
////////////////////////////////////////

function rootReducer(state={ smurfs : []}, action) {

  switch (action.type) {
    
    case "LOAD":
      return {
        ...state,
        fetchingSmurfs : true
      }
    
    case "SUCCESS":
      return {
        ...state,
        smurfs : action.payload,
        fetchingSmurfs : false
      }

    case "ADD":
      
      return {
        ...state,
        smurfs : state.smurfs.concat(action.payload),
        fetchingSmurfs : false
      }
      
    case "REMOVE":
      return {
        ...state,
        smurfs : state.smurfs.filter( smurf => smurf.id !== action.payload )
      }

    default : 
      return state;
  }
}

////////////////////////////////////////

export default rootReducer;

////////////////////////////////////////

/* Complete */
