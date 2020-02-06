import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducer'

const loggerMiddleware = createLogger()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState) {
  return createStore(
    reducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
      )
    ));
}