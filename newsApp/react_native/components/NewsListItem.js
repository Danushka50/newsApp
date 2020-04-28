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

class NewsListItem extends Component {
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
            <View style={styles.imageContainer}>
              {defaultImage ? (
                <Image
                  source={images.defaultImage}
                  resizeMode={'center'}
                  style={[styles.image, {}]}
                />
              ) : news.urlToImage ? (
                <FadeIn renderPlaceholderContent={<Placeholder />}>
                  <Image
                    source={{uri: news.urlToImage}}
                    resizeMode={'stretch'}
                    style={[styles.image]}
                  />
                </FadeIn>
              ) : (
                <Image
                  source={images.defaultImage}
                  resizeMode={'center'}
                  style={[styles.imageLoad, {}]}
                />
              )}
            </View>
            <View style={styles.detailesContainer}>
              <View style={styles.topContainer}>
                <Text style={styles.newsAuthor}>{news.author}</Text>
                <Text style={styles.newsName}>{news.title}</Text>
                <View style={styles.dateView}>
                  <Text style={styles.publishText}>
                    {moment(news.publishedAt)
                      .subtract(1, 'days')
                      .calendar()}
                  </Text>
                  <Icon
                    name={'arrow-dropright-circle'}
                    style={styles.iconMore}
                  />
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
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: '8rem',
    marginBottom: '8rem',
  },
  imageContainer: {
    // alignSelf: 'stretch',
    // width: '110rem',
    height: 'auto',
    // justifyContent: 'center',
    // alignItems: 'center',
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
    // flexDirection: 'row',
    // justifyContent: 'space-between',
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
  newsAuthor: {
    fontSize: '11rem',
    color: colors.black,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  newsName: {
    fontSize: '15rem',
    color: colors.darkGray,
    marginBottom: 20,
    // fontFamily: 'HelveticaNeueMedium',
  },
  dateView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  iconMore: {
    width: 'auto',
    height: 'auto',
  },
  publishText: {
    color: colors.lightGray,
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
)(NewsListItem);
