import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import allReducer from './reducers';
import { addLetter, keyPress, incCount } from './actions';
import store from './store';

// const store = createStore(allReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ &&window.__REDUX_DEVTOOLS_EXTENSION__());

// document.addEventListener('keydown', logKey);


ReactDOM.render(
  <Provider store = {store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
