import React, {Component} from 'react';
import {
  View,
  Dimensions,
  ScrollView,
  Text,
  Image,
  Linking,
  TouchableHighlight,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {connect} from 'react-redux';
import * as actions from '../../../redux/actions';
import _ from 'lodash';
import moment from 'moment';
import colors from '../../../config/colors';
import strings from '../../../config/strings';
import images from '../../../config/images';

const entireScreenWidth = Dimensions.get('window').width;
// const entireScreenHeight = Dimensions.get('window').height;
EStyleSheet.build({$rem: entireScreenWidth / 380});

class NewsDetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsItem: {},
    };
  }

  componentDidMount() {
    const {
      navigation: {
        state: {params},
      },
    } = this.props;
    let newsItem = params.newsItem;
    this.setState({
      newsItem: newsItem,
    });
  }

  openURL(newURL) {
    Linking.openURL(newURL);
  }

  render() {
    let newsItem = this.state.newsItem;
    if (!_.isEmpty(newsItem)) {
      let defaultImage = _.isEmpty(newsItem.item.urlToImage) ? false : true;
      let imgURL = newsItem.item.urlToImage ? newsItem.item.urlToImage : '';

      return (
        <View style={styles.container}>
          <View style={styles.newsImageContainer}>
            {!defaultImage ? (
              <Image
                source={images.defaultNews}
                resizeMode={'center'}
                style={[styles.imageLoad]}
              />
            ) : (
              <Image
                source={{uri: imgURL}}
                resizeMode={'stretch'}
                style={[styles.image]}
              />
            )}
            <Text style={styles.title}>
              {newsItem.item.title.toUpperCase()}
            </Text>
            <Text style={styles.publishText}>
              {moment(newsItem.item.publishedAt)
                .subtract(1, 'days')
                .calendar()}
            </Text>
          </View>
          <View style={styles.borderStyle} />
          <View style={styles.newsDataContainer}>
            <ScrollView style={{flex: 1}}>
              <View>
                {
                  <Text style={styles.textContent}>
                    {newsItem.item.description}
                  </Text>
                }
              </View>
              <TouchableHighlight
                style={styles.shoFullView}
                onPress={() => this.openURL(newsItem.item.url)}>
                <Text style={styles.showURL}>
                  {strings.news.newsDetailsOpenURL}
                </Text>
              </TouchableHighlight>
            </ScrollView>
          </View>
        </View>
      );
    } else {
      console.log('empty', newsItem);
      return <View style={styles.container} />;
    }
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  newsImageContainer: {
    backgroundColor: colors.white,
  },
  newsDataContainer: {
    flex: 1,
    backgroundColor: colors.white,
    marginHorizontal: '10rem',
    marginTop: '20rem',
  },
  card: {
    marginTop: '8rem',
    paddingVertical: '10rem',
    marginVertical: '15rem',
    paddingHorizontal: '10rem',
  },
  title: {
    fontSize: '18rem',
    color: colors.darkGray,
    fontWeight: '600',
    margin: '10rem',
  },
  shoFullView: {
    backgroundColor: colors.primary,
    borderRadius: '5rem',
    marginTop: '50rem',
  },
  showURL: {
    fontSize: '15rem',
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: '30rem',
    paddingVertical: '15rem',
  },
  details: {
    fontSize: '16rem',
    color: colors.darkGray,
    paddingVertical: '8rem',
    fontWeight: '600',
  },
  textContent: {
    color: colors.lightGray,
    fontSize: '14rem',
    fontWeight: '600',
    lineHeight: 21,
  },
  imageLoad: {
    width: '126rem',
    height: '126rem',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  image: {
    width: '100%',
    height: '200rem',
  },
  borderStyle: {
    borderWidth: 0.5,
    borderColor: colors.grey,
    marginHorizontal: '10rem',
    marginTop: '10rem',
  },
  publishText: {
    color: colors.lightGray,
    marginLeft: '10rem',
  },
});

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  actions,
)(NewsDetailsScreen);
