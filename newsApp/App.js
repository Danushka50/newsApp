/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import Reducers from '../react_native/redux/reducers';
import Navigation from './services/Navigation';
import {MainSwitchNavigator} from './navigators/MainSwitchNavigator';
console.disableYellowBox = true;

export default class App extends Component {
  constructor(properties) {
    super(properties);
    this.state = {};
    this.store = createStore(Reducers, {}, applyMiddleware(ReduxThunk));
  }

  render() {
    return (
      <Provider store={createStore(Reducers, {}, applyMiddleware(ReduxThunk))}>
        {
          <MainSwitchNavigator
            ref={nav => {
              Navigation.setTopLevelNavigator(nav);
            }}
          />
        }
      </Provider>
    );
  }
}
