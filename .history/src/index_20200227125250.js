import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import reducer from './containers/BurgerBuilder/Redux/reducer'
import orderReducer from './containers/Orders/Redux/reducer'
import thunk from 'redux-thunk'
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
    burgerBuilder: reducer,
    order: orderReducer
})

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
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));


const app = (<Provider store={store} >
    <BrowserRouter >
        <App />
        <
    /BrowserRouter> <
    /Provider>
    )
    
    ReactDOM.render(app, document.getElementById('root'));
    
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();