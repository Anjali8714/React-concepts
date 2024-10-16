import React from "react";


function TrialReducer(state,action) {
   switch (action.type){
    case 'change-value':
        return {
            ...state,
            value : state.value + action.payload
        }
    
    case 'change-color':
        return {
            ...state,
            color : action.payload
        }
        default:
           return state
         
   }
}

    


//  function TrialReducer(state,action) {
//     switch (action){
//      case 'increment':
//          return {
//              ...state,
//              value : state.value + 1
//          }
     
//      case 'decrement':
//          return {
//              ...state,
//              value : state .value - 1
//          }
     
//      case 'purple':
//          return {
//              ...state,
//              color : "purple"
//          }
     
//      case 'blue':
//          return {
//              ...state,
//              color : "blue"
//          }
//      default:
//          break;
//     }
//   }
 export default TrialReducer