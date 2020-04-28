import React from 'react';
import {
  ScrollView,
  Image,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
} from 'react-native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
import EStyleSheet from 'react-native-extended-stylesheet';
import {connect} from 'react-redux';
import * as actions from '../redux/actions';
import colors from '../config/colors';
import {Icon} from 'native-base';
import strings from '../config/strings';
import AsyncStorage from '@react-native-community/async-storage';
import Navigation from '../nav/Navigation';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <View
      style={styles.container}
      forceInset={{top: 'always', horizontal: 'never'}}>
      <TouchableOpacity style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            source={require('../asserts/img/user.png')}
            style={styles.thumbnail}
          />
        </View>
        <View style={styles.headerRight}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.textHeader}>
              {strings.user.drawerHeaderOne}
            </Text>
          </View>
          <Text style={styles.textName}>{strings.user.drawerHeaderTwo}</Text>
        </View>
      </TouchableOpacity>
      <DrawerNavigatorItems {...props} />
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => {
          Navigation.navigate('Auth');
          AsyncStorage.clear();
        }}>
        <Text style={styles.text}>Log out</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
);

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: '150rem',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightBlue,
  },
  thumbnail: {
    width: '71rem',
    height: '71rem',
    borderRadius: '50rem',
  },
  headerLeft: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerRight: {
    flex: 2,
  },
  textHeader: {
    color: colors.white,
    fontFamily: 'HelveticaNeueMedium',
    fontSize: '16rem',
    fontWeight: Platform.OS === 'ios' ? '500' : '400',
  },
  textName: {
    opacity: 0.75,
    color: colors.primaryLight,
    fontFamily: 'HelveticaNeuelight',
    fontSize: '15rem',
    fontWeight: Platform.OS === 'ios' ? '500' : '400',
  },
  text: {
    opacity: 0.5,
    color: '#ffffff',
    fontFamily: 'HelveticaNeueMedium',
    fontSize: 14.5,
    fontWeight: 'bold',
  },
  logoutButton: {
    flexDirection: 'row',
    paddingHorizontal: 18,
    marginTop: 10,
  },
});

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  actions,
)(CustomDrawerContentComponent);
