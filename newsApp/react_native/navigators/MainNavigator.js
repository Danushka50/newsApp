import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import Splash from '../screens/SplashScreen';
import {AuthStackNavigator} from './AuthStackNavigator';
import {AppStackNavigator} from './AppStackNavigator';

export const MainNavigator = createAppContainer(
  createSwitchNavigator(
    {
      Splash,
      Auth: AuthStackNavigator,
      App: AppStackNavigator,
    },
    {
      initialRouteName: 'Splash',
    },
  ),
);
