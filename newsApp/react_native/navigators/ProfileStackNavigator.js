import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import ProfileScreen from '../screens/App/Profile/ProfileScreen';
import Header from '../components/Header';

const ProfileStackNavigator = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
      navigationOptions: ({navigation}) => ({
        header: (
          <Header
            isHome
            title="My Profile"
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }),
    },
  },
  {
    initialRouteName: 'Profile',
  },
);

export default ProfileStackNavigator;
