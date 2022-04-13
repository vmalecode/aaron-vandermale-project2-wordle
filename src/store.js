import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import allReducer from './reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
    key: 'persist-key',
    storage
}
const persistedReducer = persistReducer(persistConfig, allReducer);
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
const store = createStore(persistedReducer, composedEnhancer)
const persistor = persistStore(store);
export default store
export {persistor};