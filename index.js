import React from 'react';
import ReactDOM from 'react-dom';
import RouterConfig from './src/app/RouterConfig';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './src/reducer/index';

let store = createStore(
    reducers,
    applyMiddleware(thunk, logger)
)

ReactDOM.render(<RouterConfig store={store} />, document.getElementById('app'));