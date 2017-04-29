import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import reducer from './reducer';
import * as initialState from './initialState.js';
import './index.css';
import '../semantic/dist/semantic.min.css';

const store = createStore(reducer, initialState);
const app = <App store={store}/>;

ReactDOM.render(
  app,
  document.getElementById('root'), // eslint-disable-line no-undef
);
