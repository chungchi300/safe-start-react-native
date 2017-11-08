import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import rootReducer from 'reducers';
import { Platform } from 'react-native';
import { apiMiddleware } from 'redux-api-middleware';
const middlewares = [thunk, apiMiddleware];

export default function configureStore(initialState) {
  const enhancer = compose(
    // Middleware you want to use in development:
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    // Required! Enable Redux DevTools with the monitors you chose
  );
  return createStore(rootReducer, initialState, enhancer);
}
