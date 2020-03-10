import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import app from './App';
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import reducer from './containers/BurgerBuilder/Redux/reducer'
import orderReducer from './containers/Orders/Redux/reducer'
import authReducer from './containers/Auth/Redux/reducer'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import * as serviceWorker from './serviceWorker';
import { watchAuth, watchBurgerBuilder, watchOrder } from './redux-store/sagas-watcher'
const rootReducer = combineReducers({
    burgerBuilder: reducer,
    order: orderReducer,
    auth: authReducer
})

const sagaMiddleware = createSagaMiddleware()

const logger = store => {
    return next => {
        return action => {
            // console.log("[Middleware] Dispatching","logger")
            const result = next(action)
            // const state = store.getState()
            // console.log(state, "logger")
            return result
        }
    }
}
const composeEnhancers = process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk, sagaMiddleware)));

sagaMiddleware.run(watchAuth)
sagaMiddleware.run(watchBurgerBuilder)
sagaMiddleware.run(watchOrder)

const app = (<Provider store={store} >
    <BrowserRouter >
        <app />
    </BrowserRouter>
</Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();