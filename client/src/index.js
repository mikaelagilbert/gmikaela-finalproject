import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import * as initialState from './initialState.js';
import './index.css';
import '../semantic/dist/semantic.min.css';

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  //app,
  document.getElementById('root'), // eslint-disable-line no-undef
);
