import { createStore, applyMiddleware, compose } from 'redux';
import devTools from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';
import { Platform } from 'react-native';
import { apiMiddleware } from 'redux-api-middleware';
const middlewares = [thunk, apiMiddleware];

export default function configureStore(initialState) {
  const enhancer = compose(
    // Middleware you want to use in development:
    applyMiddleware(...middlewares),
    devTools({
      name: Platform.OS,
      hostname: 'localhost',
      realtime: true,
    })

    // Required! Enable Redux DevTools with the monitors you chose
  );
  return createStore(rootReducer, initialState, enhancer);
}
