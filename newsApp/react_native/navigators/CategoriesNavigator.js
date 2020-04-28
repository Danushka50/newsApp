import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import CategoriesScreen from '../screens/App/Categories/CategoriesScreen';
import NewsDetailsScreen from '../screens/App/NewsDetails/NewsDetailsScreen';
import Header from '../components/Header';
import CategoriesMainScreen from '../screens/App/Categories/CategoriesMainScreen';

const CategoriesNavigator = createStackNavigator(
  {
    CategoriesMain: {
      screen: CategoriesMainScreen,
      navigationOptions: ({navigation}) => ({
        header: (
          <Header
            isHome
            title="Categories Main"
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }),
    },
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: ({navigation}) => ({
        header: (
          <Header
            title={
              navigation.state.params
                ? navigation.state.params.category.value
                : 'Health'
            }
            onPress={() => navigation.pop()}
          />
        ),
      }),
    },
    NewsDetails: {
      screen: NewsDetailsScreen,
      navigationOptions: ({navigation}) => ({
        header: (
          <Header title="News Details" onPress={() => navigation.pop()} />
        ),
      }),
    },
  },
  {
    initialRouteName: 'CategoriesMain',
  },
);

export default CategoriesNavigator;
