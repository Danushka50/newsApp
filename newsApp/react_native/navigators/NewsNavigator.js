import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import NewsScreen from '../screens/App/News/NewsScreen';
import NewsDetailsScreen from '../screens/App/NewsDetails/NewsDetailsScreen';
import Header from '../components/Header';

const NewsNavigator = createStackNavigator(
  {
    News: {
      screen: NewsScreen,
      navigationOptions: ({navigation}) => ({
        header: (
          <Header
            isHome
            title="News"
            onPress={() => navigation.toggleDrawer()}
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
    initialRouteName: 'News',
  },
);

export default NewsNavigator;
