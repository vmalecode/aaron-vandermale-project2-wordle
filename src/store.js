import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import allReducer from './reducers'
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
const store = createStore(allReducer, composedEnhancer)
export default store