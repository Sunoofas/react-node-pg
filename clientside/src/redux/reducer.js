import { LOGIN_REQUEST, LOGIN_FAILURE,LOGIN_SUCCESS } from "./action";

 const iniitialState ={
    loginstatus: false,
 };

 const memberReducer = (state = iniitialState, action) =>{
    switch(action.type){
        case LOGIN_REQUEST:
              return{
                ...state,
              };
        case LOGIN_SUCCESS:
              return{
                ...state,
                loginstatus: true,
              };

        case LOGIN_FAILURE:
              return{
                ...state,
              };
              default:
                  return state;
    }
 };

 export default memberReducer;
 