/* eslint-disable no-else-return */
import React, {Component} from 'react';
import {View, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import {FlatButton} from '../../../components';
import colors from '../../../config/colors';
import strings from '../../../config/strings';
import ProgressiveImageRound from '../../../components/ProgressiveImageRound';
import avatar from '../../../asserts/img/user.png';
import * as actions from '../../../redux/actions';
import AsyncStorage from '@react-native-community/async-storage';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

const options = {
  title: 'Select Profile Picture',
  quality: 0.3,
  skipBackup: true,
  path: 'images',
  cameraRoll: true,
  waitUntilSaved: true,
  loadingHealthProfile: false,
};

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('userEmail').then(userEmail => {
      if (userEmail != null) {
        this.setState({
          userEmail: userEmail,
        });
      }
    });
  }

  render() {
    const {userEmail} = this.state;
    return (
      <View style={styles.mainContainer}>
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            margin: 16,
          }}>
          <View style={{alignItems: 'center'}}>
            <ProgressiveImageRound source={avatar} style={styles.thumbnail} />
          </View>
        </View>
        <View style={styles.country}>
          <FlatButton title={userEmail} />
          <View style={styles.line} />
          <FlatButton title={strings.user.country} />
          <View style={styles.line} />
          <FlatButton title={strings.user.gender} />
        </View>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.lightWhite,
  },
  thumbnail: {
    width: '100rem',
    height: '100rem',
  },
  line: {
    width: entireScreenWidth - EStyleSheet.value('64rem'),
    backgroundColor: colors.primaryLight,
    opacity: 0.5,
    margin: '5rem',
  },
});

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  actions,
)(ProfileScreen);
