import { FEACH_USER_REQUEST, FEACH_USER_SUCCESS, FEACH_USER_FAIL } from './userTypes'

const initialState = {
    loading: false,
    user: [],
    error: ''
}

 export const UserReducers = ( state = initialState, actions ) =>{
    switch (actions.type){
        case FEACH_USER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FEACH_USER_SUCCESS:
            return {
              
                loading:false,
                user: actions.payload,
                error: ''
            };
         case FEACH_USER_FAIL: 
          return {
            loading: false,
            user: [],
            error: actions.payload
          }     ; 
        default:
            return state;
    }

}