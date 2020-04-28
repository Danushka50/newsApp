import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import SignInScreen from '../screens/Auth/SignInScreen';

export const AuthStackNavigator = createStackNavigator(
  {
    SignInScreen: {
      screen: SignInScreen,
      headerMode: 'SignIn',
      header: null,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
  },
  {
    initialRouteName: 'SignInScreen',
  },
);
