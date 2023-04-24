import { initialState } from "./initialState"

export const MulDivRed = (oldState=initialState,action)=>{
    console.log("old----->",oldState)
    let newState = oldState
    switch(action.type){
      case "MULBY2":
        return {
          ...newState,
          value:newState.value*action.payload
        }
        case "MULBY3":
            return {
              ...newState,
              value:newState.value*action.payload
            }
        case "DIVBY2":
            return {
              ...newState,
              value:newState.value/action.payload
            }
        case "DIVBY5":
            return {
              ...newState,
              value:newState.value/action.payload
            }
      
        case "RESET":
          return {
            ...newState,
            value:action.payload
          }
      default:
        return newState
    }
    
  }