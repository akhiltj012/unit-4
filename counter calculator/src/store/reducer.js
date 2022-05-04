
import {INCREMENT,DECREMENT,MULTIPLY,DIVIDE} from "./actionType"

export const reducer = (state, action)=>{

console.log("state",state)

switch(action.type){
    case INCREMENT:{
    return{...state,
        count:state.count+action.payload

    }
    }


    case DECREMENT:{       
      return{
        ...state,
        count:state.count-action.payload
    }
    
    }
    case MULTIPLY:{       
        return{
          ...state,
          count:state.count*action.payload
      }
      
      }



      case DIVIDE:{       
        return{
          ...state,
          count:state.count/action.payload
      }
      
      }
    default:{
      return state
    }
}

}