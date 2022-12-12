import { createStore } from 'redux'
import { buyCake } from './cake/cakeActions'
import { rootReducer  } from './rootReducer';
import { applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore (rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

export default store;
//  console.log("inital state", store.getState())

// store.dispatch(buyCake())

// unsubscribe();