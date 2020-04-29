/* eslint-disable no-undef */
import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';
import images from '../../config/images';
import colors from '../../config/colors';
import {REG_EMAIL_ADDRESS} from '../../config/constants';
import AsyncStorage from '@react-native-community/async-storage';
import Navigation from '../../nav/Navigation';

class SignInScreen extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      empty: false,
      validate: false,
    };
  }

  SignIn() {
    const email = this.state.email;
    const password = this.state.password;

    if (!email || email.length === 0 || !password || password.length === 0) {
      this.setState({empty: true, validate: false});
      return;
    } else if (!this.validateEmail(email)) {
      this.setState({empty: false, validate: true});
      return;
    } else {
      this.setState({empty: false, validate: false});
      AsyncStorage.setItem('registrationStatus', 'true');
      AsyncStorage.setItem('userEmail', email);
      Navigation.navigate('App');
    }
  }

  validateEmail(text) {
    return REG_EMAIL_ADDRESS.test(text);
  }

  render() {
    const {email, password} = this.state;
    return (
      <ImageBackground
        style={styles.backgroundImage}
        source={images.background}>
        <View style={styles.container}>
          {/* <Toast ref="toast" /> */}
          {this.state.empty || this.state.validate ? (
            <View style={styles.emptyOrVlidateView}>
              <Text style={styles.emptyOrVlidateText}>
                {this.state.empty
                  ? 'Please enter email or password'
                  : 'Email or Password incorrect'}
              </Text>
            </View>
          ) : null}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Email"
              value={email}
              keyboardType="email-address"
              underlineColorAndroid={colors.grey}
              onChangeText={email => this.setState({email})}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Password"
              value={password}
              secureTextEntry={true}
              underlineColorAndroid={colors.grey}
              onChangeText={password => this.setState({password})}
            />
          </View>
          <View style={styles.forgotPasswordView}>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.forgotPassword}>Forgot Password</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.socialMediaMainView}>
          <TouchableOpacity style={styles.socialMediaView}>
            <Image
              source={images.fb}
              resizeMode={'contain'}
              style={[styles.image]}
            />
            <Text style={styles.SignUpText}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialMediaView}>
            <Image
              source={images.twitter}
              resizeMode={'contain'}
              style={[styles.image]}
            />
            <Text style={styles.SignUpText}>Twitter</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          underlayColor={colors.primaryLight}
          style={[styles.buttonContainer, styles.SignInButton]}
          onPress={() => this.SignIn()}>
          <Text style={styles.SignInText}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.signUpView}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.SignUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    backgroundColor: colors.grey,
  },
  container: {
    flex: 1,
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    borderColor: colors.primary,
    backgroundColor: colors.white,
    borderRadius: 5,
    width: '90%',
    height: 150,
    marginBottom: 20,
    justifyContent: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 10,
    width: '95%',
    marginBottom: 10,
    fontSize: 14,
  },
  buttonContainer: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 5,
  },
  SignInButton: {
    backgroundColor: colors.primary,
  },
  SignInText: {
    color: colors.white,
    fontSize: 18,
  },
  forgotPasswordView: {
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  forgotPassword: {
    color: colors.purple,
    fontSize: 16,
  },
  signUpView: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 30,
    justifyContent: 'center',
  },
  SignUpText: {
    color: colors.purple,
    marginLeft: 10,
  },
  socialMediaMainView: {
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  socialMediaView: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  image: {
    width: 40,
    height: 40,
  },
  emptyOrVlidateView: {
    marginBottom: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 50,
    borderRadius: 5,
  },
  emptyOrVlidateText: {
    color: colors.primary,
    fontSize: 15,
  },
});

const mapStateToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  actions,
)(SignInScreen);
