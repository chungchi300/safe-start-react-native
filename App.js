import configureStore from 'configureStore.js';
import { createStore } from 'redux';
import { Text, View, Platform } from 'react-native';
import rootReducer from 'reducers';
import devToolsEnhancer from 'remote-redux-devtools';
const store = createStore(
  rootReducer,
  devToolsEnhancer({
    name: 'asd' + Platform.OS,
    hostname: 'localhost',
    realtime: true,
  })
);
import { Provider } from 'react-redux';
import React from 'react';
import Front from 'views/Front.js';
import theme from 'theme';
import { ThemeProvider } from 'styled-components';

console.log('store', store, store.getState());

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Text>asdasd</Text>
        </View>
      </Provider>
    );
  }
}
