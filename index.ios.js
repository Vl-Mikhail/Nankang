/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import Root from './src/Root';
import { Provider } from 'react-redux';
import store from './src/redux/store';


const Main = () => (
    <Provider store={store}>
        <Root />
    </Provider>
);

AppRegistry.registerComponent('Nankang', () => Main);
