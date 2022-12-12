import { BUY_CAKE } from "./cakeActionTypes"
import { ADD_CAKE } from "./cakeActionTypes"

 export const buyCake = (number = 1) => {
    return {
        type: BUY_CAKE,
        payload: number
    }

}
export const AddCake = () => {
    return {
        type: ADD_CAKE
    }
}