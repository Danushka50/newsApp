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
import {NEWS_SOURCE_DATA} from '../../../config/constants';
import {Card} from '../../../components';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

class CategoriesMainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderItem(item) {
    return (
      <Card containerStyle={styles.cardStyle}>
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
      </Card>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{marginTop: 10}}
          data={NEWS_SOURCE_DATA}
          renderItem={item => this.renderItem(item)}
          extraData={this.state}
        />
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    flex: 1,
  },
  cardStyle: {
    marginBottom: '10rem',
  },
  imageView: {
    width: 'auto',
    height: '130rem',
    marginBottom: '10rem',
  },
  image: {
    width: '100%',
    height: '100rem',
    borderRadius: 20 / 2,
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
