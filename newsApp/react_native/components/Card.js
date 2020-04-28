import React from 'react';
import {Dimensions, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../config/colors';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

const Card = props => {
  const {containerStyle, children} = props;
  return <View style={[containerStyle, styles.card]}>{children}</View>;
};

const styles = EStyleSheet.create({
  card: {
    alignSelf: 'center',
    width: entireScreenWidth - EStyleSheet.value('32rem'),
    height: 'auto',
    borderRadius: '10rem',
    elevation: 2,
    shadowColor: 'rgba(0, 0, 0, 0.04)',
    shadowOffset: {width: 3, height: 0},
    shadowOpacity: 1,
    shadowRadius: '6rem',
    backgroundColor: colors.white,
  },
});

export {Card};
