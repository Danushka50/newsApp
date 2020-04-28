import React from 'react';
import {TouchableOpacity, Text, Dimensions, View, Platform} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Icon} from 'native-base';
import colors from '../config/colors';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

const FlatButton = props => {
  const {
    disabled,
    style = {},
    textStyle = {},
    onPress,
    title,
    color = colors.white,
    radius = '14rem',
    activeOpacity = 0.6,
  } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonStyle,
        style,
        {backgroundColor: color, borderRadius: EStyleSheet.value(radius)},
      ]}
      activeOpacity={activeOpacity}
      disabled={disabled}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignSelf: 'stretch',
        }}>
        <View
          style={{flex: 1, alignItems: 'flex-start', justifyContent: 'center'}}>
          {
            <Icon
              name={'ios-information-circle-outline'}
              style={styles.icon}
              type={'Ionicons'}
            />
          }
        </View>
        <View style={{flex: 5, justifyContent: 'center'}}>
          <Text style={[styles.btnTextStyle, textStyle]}>{title}</Text>
        </View>

        <View
          style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = EStyleSheet.create({
  buttonStyle: {
    width: '343rem',
    height: '55rem',
    borderRadius: '14rem',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: '16rem',
    paddingHorizontal: '15rem',
    shadowOffset: {width: 3, height: 0},
    shadowRadius: '6rem',
    shadowColor: 'rgba(0, 0, 0, 0.04)',
  },
  btnTextStyle: {
    fontSize: '15rem',
    fontWeight: Platform.OS === 'ios' ? '500' : '400',
    color: colors.buttonTextGray,
    textAlign: 'left',
    fontFamily: 'HelveticaNeueMedium',
  },
  icon: {
    fontSize: '18rem',
    color: colors.buttonTextGray,
  },
});

export {FlatButton};
