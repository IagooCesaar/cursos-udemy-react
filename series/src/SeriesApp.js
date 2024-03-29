import React from 'react';
import Router from './Router';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'; //Middleware 

import rootReducer from './reducers';
import {composeWithDevTools} from 'remote-redux-devtools';//Middleware 

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(reduxThunk)
));


const SeriesApp = (prop) => (
    <Provider store={store}>
        <Router />
    </Provider>
    
);

export default SeriesApp;