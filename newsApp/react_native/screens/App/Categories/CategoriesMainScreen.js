import React, {Component} from 'react';
import {
  View,
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {connect} from 'react-redux';
import colors from '../../../config/colors';
import * as actions from '../../../redux/actions';
import {Card} from '../../../components';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

export const Categories = [
  {
    id: 'health',
    value: 'Health',
    uri:
      'https://patientengagementhit.com/images/site/article_headers/_normal/2017-12-12-patient-care.png',
  },
  {
    id: 'entertainment',
    value: 'Entertainment',
    uri:
      'https://1yfd8w35xqq41q3ou63czp8h-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/350x215-FEAT-in-post-Entertainment.jpg',
  },

  {
    id: 'sports',
    value: 'Sports',
    uri:
      'https://www.pngitem.com/pimgs/m/328-3281047_ball-game-sport-clip-art-sports-balls-clipart.png',
  },
  {
    id: 'general',
    value: 'General',
    uri: 'https://i.ytimg.com/vi/JmIosz5ygIU/maxresdefault.jpg',
  },
  {
    id: 'science',
    value: 'Science',
    uri:
      'https://www.gutmicrobiotaforhealth.com/wp-content/uploads/2019/12/RP_Gut_microbiota_science_2019-1024x558.png',
  },
  {
    id: 'technology',
    value: 'Technology',
    uri:
      'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
];

class CategoriesMainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderItem(item) {
    return (
      <View style={styles.cardStyle}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Categories', {
              category: item.item,
            })
          }>
          <View style={styles.imageView}>
            <Image
              source={{uri: item.item.uri}}
              resizeMode={'cover'}
              style={styles.image}
            />
            <Text style={styles.imageText}>
              {item.item.value.toUpperCase()}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{marginTop: 10}}
          data={Categories}
          renderItem={item => this.renderItem(item)}
          extraData={this.state}
          numColumns={2}
        />
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  cardStyle: {
    marginBottom: '10rem',
    marginHorizontal: '20rem',
    marginVertical:'10rem',
    borderRadius:5,
    borderWidth:0.5
  },
  imageView: {
    width: '150rem',
    height: '130rem',
    marginBottom: '10rem',
  },
  image: {
    width: '100%',
    height: '100rem',
    borderRadius: 10 / 2,
  },
  imageText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 5,
  },
});

const mapStateToProps = state => {
  return {
    catagoryNews: state.news.catagoryNews,
    catagoryNewsLoading: state.news.catagoryNewsLoading,
  };
};

export default connect(
  mapStateToProps,
  actions,
)(CategoriesMainScreen);
