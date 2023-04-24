import { initialState } from "./initialState"

export const AddSubRed = (oldState=initialState,action)=>{
    let newState = oldState
    switch(action.type){
      case "ADD":
        return {
          ...newState,
          value:newState.value+action.payload
        }
      case "SUB":
        return {
          ...newState,
          value:newState.value-action.payload
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