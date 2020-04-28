import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Icon} from 'native-base';
import {connect} from 'react-redux';
import colors from '../config/colors';
import * as actions from '../redux/actions';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {onPress, isHome, title, style = {}} = this.props;
    return (
      <View style={{backgroundColor: colors.primary}}>
        <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
        {isHome ? (
          <View style={styles.header}>
            <View style={styles.menuIconContatiner}>
              <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
                <Icon
                  name={'menu'}
                  style={styles.icon}
                  type={'SimpleLineIcons'}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.leftContainer}>
              <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.rightContainer}>
              <Icon
                name={'notifications'}
                style={styles.iconNotifications}
                type={'Ionicons'}
              />
            </View>
          </View>
        ) : (
          <View style={[style, styles.header]}>
            <View style={styles.menuIconContatiner}>
              <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
                <Icon
                  name={'ios-arrow-round-back'}
                  style={styles.iconBack}
                  type={'Ionicons'}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.leftContainerFull}>
              <Text style={styles.title}>{title}</Text>
            </View>
          </View>
        )}
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    backgroundColor: colors.primary,
  },
  header: {
    height: '56rem',
    backgroundColor: colors.primary,
    flexDirection: 'row',
    padding: '16rem',
    alignItems: 'center',
  },
  menuIconContatiner: {
    flex: 0.1,
    marginTop: Platform.OS === 'ios' ? '-4rem' : '0rem',
  },
  leftContainer: {
    flex: 0.6,
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  leftContainerFull: {
    flex: 0.9,
    alignItems: 'flex-start',
  },
  rightContainer: {
    flex: 0.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: '20rem',
    color: colors.white,
    fontFamily: 'HelveticaNeueMedium',
    fontWeight: '500',
    textAlign: 'left',
  },
  headerLogo: {
    width: '55rem',
    height: '32rem',
  },
  icon: {
    fontSize: '20rem',
    color: colors.white,
    fontWeight: '800',
  },
  iconBack: {
    fontSize: '32rem',
    color: colors.white,
    fontWeight: '800',
  },
  iconNotifications: {
    fontSize: '30rem',
    color: colors.white,
    fontWeight: '800',
  },
});

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  actions,
)(Header);
