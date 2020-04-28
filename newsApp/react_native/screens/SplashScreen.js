import React, {Component} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import * as actions from '../redux/actions';
import images from '../config/images';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    setTimeout(() => {
      this.checkUserStatus();
    }, 1500);
  }

  async checkUserStatus() {
    AsyncStorage.getItem('registrationStatus').then(userLoginStatus => {
      if (userLoginStatus === 'true') {
        this.props.navigation.navigate('News');
      } else {
        this.props.navigation.navigate('Auth');
      }
    });
  }

  render() {
    return (
      <ImageBackground
        style={styles.backgroundImage}
        source={images.splashScreen}
      />
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
});

const mapStateToProps = state => {
  return {};
};
export default connect(
  mapStateToProps,
  actions,
)(SplashScreen);
