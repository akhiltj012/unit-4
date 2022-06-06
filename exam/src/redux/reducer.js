import { actionTypes } from "./action";

const initState = {
           data:{ isLoading:false,
            isError:false,
            data:[]
}
};

function reducer(state = initState, action) {
    // write code here
    switch (action.type) {
        
        case ADD_USER_REQUEST:{
            return{
                ...state,
                data:{
                    isLoading:true,
                    isError:false,
                    data:[],
                }
            }
        }
        case ADD_USER_SUCCESS:{
            return{
                ...state,
                data:action.payload
                
            }
        }
        case ADD_USER_FAILURE:{
            return{
                ...state,
                data:{
                    isLoading:false,
                    isError:true,
                    data:[],
                },
            }
        }
        
    
        default:{
            return state;
        }
    }
};


export default reducer;
