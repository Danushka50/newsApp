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
import Reducers from './react_native/redux/reducers';
import Navigation from './react_native/nav/Navigation';
import {MainNavigator} from './react_native/navigators/MainNavigator';
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
          <MainNavigator
            ref={nav => {
              Navigation.setTopLevelNavigator(nav);
            }}
          />
        }
      </Provider>
    );
  }
}
