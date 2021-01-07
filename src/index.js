import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import {logger} from 'redux-logger'
import thunk from 'redux-thunk'
import {appReducer} from './redux/reducers/appReducer'

const store = createStore(appReducer,applyMiddleware(thunk, logger) );

const rootElement = document.getElementById('root');


ReactDOM.render(

<Provider store={store}>
    <App />
</Provider>

, rootElement);