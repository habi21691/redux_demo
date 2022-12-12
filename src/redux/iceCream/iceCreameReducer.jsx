import { BUY_ICECREAME } from "./iceCreamActionTypes";


const initialState = {
    numberOfIceCreame: 20
}

export const iceCreameReducer = ( state = initialState, actions ) => {
   switch ( actions.type) {
     case BUY_ICECREAME:
        return {
            ...state,
            numberOfIceCreame: state.numberOfIceCreame - 2
        }
    default:
        return state;    

   }
}