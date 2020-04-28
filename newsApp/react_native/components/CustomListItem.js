/* eslint-disable no-lonely-if */
import React, {Component} from 'react';
import {Text, View, Dimensions, TouchableOpacity, Image} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {connect} from 'react-redux';
import FadeIn from 'react-native-fade-in-image';

import {Card} from '.';
import colors from '../config/colors';
import * as actions from '../redux/actions';
import images from '../config/images';
import {SkypeIndicator} from 'react-native-indicators';
import moment from 'moment';
import {Icon} from 'native-base';

const Placeholder = () => (
  <View style={styles.landing}>
    <SkypeIndicator color={colors.primary} />
  </View>
);

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

class CustomListItem extends Component {
  constructor() {
    super();
    this.state = {
      isImageLoading: true,
    };
  }

  render() {
    const {news, defaultImage, onPress} = this.props;

    return (
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
          <Card containerStyle={styles.mainContainer}>
            <View style={styles.detailesContainer}>
              <View style={styles.topContainer}>
                <Text style={styles.newsName}>{news.name}</Text>
                <Text style={styles.newsDesc} numberOfLines={2}>
                  {news.description}
                </Text>
                <View style={styles.dateView}>
                  <Text style={styles.publishText}>
                    {moment(news.publishedAt)
                      .subtract(1, 'days')
                      .calendar()}
                  </Text>
                  <Icon name={'open'} style={styles.iconMore} />
                </View>
              </View>
              <View style={styles.middleContainer} />
              <View style={styles.bottomContainer}>
                <View style={styles.bottomRight} />
              </View>
            </View>
          </Card>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5rem',
    marginTop: '5rem',
  },
  imageContainer: {
    alignSelf: 'stretch',
    width: '110rem',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailesContainer: {
    flex: 1,
    alignSelf: 'stretch',
    height: 'auto',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  imageLoad: {
    width: '82rem',
    height: '82rem',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  image: {
    width: '100%',
    height: '150rem',
    alignSelf: 'center',
    borderRadius: 30 / 2,
  },
  topContainer: {
    height: 'auto',
  },
  middleContainer: {
    height: 'auto',
  },
  bottomContainer: {
    height: 'auto',
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '8rem',
  },
  newsDesc: {
    fontSize: '11rem',
    color: colors.darkGray,
    marginTop: '2rem',
    marginBottom: '10rem',
  },
  newsName: {
    fontSize: '15rem',
    marginTop: '10rem',
    fontWeight: 'bold',
  },
  dateView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '10rem',
    justifyContent: 'space-between',
  },
  iconMore: {
    width: 'auto',
    height: 'auto',
  },
  publishText: {
    fontSize: '12rem',
    color: colors.purple,
  },
  bottomRight: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  landing: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  actions,
)(CustomListItem);
