import {
    FEACH_USER_REQUEST,
    FEACH_USER_SUCCESS,
    FEACH_USER_FAIL
} from './userTypes'
import axios from 'axios'

export const feachingRequest = () => {
    return {
        type :FEACH_USER_REQUEST
    }
}

export const feachingSuccess = ( user ) => {
 return {
    type: FEACH_USER_SUCCESS,
    payload: user
 }
}

 export const feachingFailure = ( error) =>{
    return {
        type: FEACH_USER_FAIL,
        payload: error
    }
}
export const feachUser = () => {
    return  (dispatch) =>  {
        dispatch(feachingRequest)
      axios.get('https://jsonplaceholder.typicode.com/users').then( response =>{
      const users = response.data
      dispatch(feachingSuccess(users))
      }).catch( error => {
         const errorMsg = error.message;
         dispatch(feachingFailure(errorMsg))
      })
    }
}