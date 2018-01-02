import configureStore from './src/configureStore.js';
import { createStore } from 'redux';
import { Text, View, Platform } from 'react-native';
import rootReducer from 'reducers';

const store = configureStore();
import { Provider } from 'react-redux';
import React from 'react';
import Front from 'views/Front.js';
import theme from 'theme';
import { ThemeProvider } from 'styled-components';
import AppWithNavigationState from './src/AppNavigator';
import SWAGGER from 'swagger.js';
import Api from 'redux-api-middleware-addon';
store.dispatch(Api.Action.setSwagger(SWAGGER));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppWithNavigationState />
        </ThemeProvider>
      </Provider>
    );
  }
}
