import { BUY_CAKE } from "./cakeActionTypes";
import { ADD_CAKE } from "./cakeActionTypes";

const initialState = {
    numberOfCake : 10
}

export  const cakeReducer = (state = initialState, actions) => {
       switch (actions.type) {
        case BUY_CAKE:
            return {
                ...state,
                 numberOfCake: state.numberOfCake - actions.payload
            }
        case ADD_CAKE:
            return {
                ...state,
                numberOfCake: state.numberOfCake + actions.payload
            } 
        default:
            return state;
       }
}