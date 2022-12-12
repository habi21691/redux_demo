import { cakeReducer } from './cake/cakeReducer'
import { iceCreameReducer } from './iceCream/iceCreameReducer'
import { combineReducers } from 'redux'
import { UserReducers } from './user/userReducers'


 export const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCreame: iceCreameReducer,
    users: UserReducers
})
