import React from 'react';
import {Dimensions} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import EStyleSheet from 'react-native-extended-stylesheet';
import ProfileStackNavigator from './ProfileStackNavigator';
import NewsNavigator from './NewsNavigator';
import CategoriesNavigator from './CategoriesNavigator';
import colors from '../config/colors';
import CustomDrawerContentComponent from '../components/CustomDrawerMenu';
import Header from '../components/Header';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

export const DrawerNavigator = createDrawerNavigator(
  {
    News: {
      screen: NewsNavigator,
      navigationOptions: ({navigation}) => ({
        header: (
          <Header title="News" onPress={() => navigation.navigate('Home')} />
        ),
      }),
    },
    Categories: {
      screen: CategoriesNavigator,
      navigationOptions: ({navigation}) => ({
        header: (
          <Header
            title="Categories"
            onPress={() => navigation.navigate('Home')}
          />
        ),
      }),
    },
    MyProfile: {
      screen: ProfileStackNavigator,
      navigationOptions: ({navigation}) => ({
        header: (
          <Header
            title="Tutorial"
            onPress={() => navigation.navigate('Home')}
          />
        ),
      }),
    },
  },
  {
    initialRouteName: 'News',
    drawerType: 'front',
    drawerBackgroundColor: colors.primary,
    backBehavior: 'none',
    contentComponent: CustomDrawerContentComponent,
    contentOptions: {
      activeTintColor: colors.white,
      inactiveTintColor: 'rgba(255, 255, 255, 0.5)',
      itemsContainerStyle: {
        marginVertical: 0,
      },
      iconContainerStyle: {
        opacity: 1,
      },
    },
  },
);
