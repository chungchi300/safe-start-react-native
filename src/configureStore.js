import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';
const composeEnhancers = compose;
import { apiMiddleware } from 'redux-api-middleware';

const enhancer = composeEnhancers(
  // Middleware you want to use in development:
  applyMiddleware(thunk, apiMiddleware)
  // Required! Enable Redux DevTools with the monitors you chose
);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
