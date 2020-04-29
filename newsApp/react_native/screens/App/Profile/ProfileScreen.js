/* eslint-disable no-else-return */
import React, {Component} from 'react';
import {View, Dimensions, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../../config/colors';
import strings from '../../../config/strings';
import images from '../../../config/images';
import * as actions from '../../../redux/actions';
import AsyncStorage from '@react-native-community/async-storage';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

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
        <View style={styles.profileContainer}>
          <View style={styles.imageView}>
            <Image source={images.user} style={styles.profile} />
          </View>
        </View>
        <View style={styles.user}>
          <Text style={styles.textStyle}>{strings.user.userName}</Text>
          <Text style={styles.textStyle}>{strings.user.LastName}</Text>
          <Text style={styles.textStyle}>{strings.user.userId}</Text>
          <Text style={styles.textStyle}>{userEmail}</Text>
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
  profileContainer: {
    backgroundColor: colors.lightBlue,
    width: '100%',
    height: 150,
  },
  profile: {
    width: '100rem',
    height: '100rem',
    borderWidth: '2rem',
    borderColor: colors.white,
    borderRadius: 120 / 2,
  },
  imageView: {
    alignItems: 'center',
    marginTop: 80,
  },
  user: {
    width: '90%',
    marginTop: '70rem',
  },
  textStyle: {
    backgroundColor: colors.white,
    borderRadius: '10rem',
    paddingTop: '15rem',
    paddingHorizontal: '10rem',
    height: '50rem',
    marginBottom: '10rem',
  },
});

const mapStateToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  actions,
)(ProfileScreen);
