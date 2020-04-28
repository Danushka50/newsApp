import React, {Component} from 'react';
import {View, Dimensions, FlatList, Linking} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {connect} from 'react-redux';
import * as actions from '../../../redux/actions';
import Loader from '../../../components/Loader';
import CustomListItem from '../../../components/CustomListItem';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

class CategoriesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      newsCategoryList: [],
      category: this.props.navigation.state.params
        ? this.props.navigation.state.params.category.id
        : 'health',
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.isFetching) {
      this.setState({
        isFetching: false,
      });
    }
  }

  async componentDidMount() {
    const category = this.state.category;
    this.fetchData(category);
  }

  fetchData(category) {
    this.props.getCategotryNewsData(category);
  }

  onRefresh() {
    this.setState({isFetching: true}, function() {
      let category = this.state.category;
      this.fetchData(category);
    });
  }

  renderItem(item) {
    return (
      <CustomListItem
        news={item.item}
        defaultImage={false}
        onPress={() => this.openURL(item.item.url)}
      />
    );
  }

  openURL(newURL) {
    Linking.openURL(newURL);
  }

  render() {
    let catagoryNewsLoading = this.props.catagoryNewsLoading;
    let catagoryNews = this.props.catagoryNews;
    let isFetching = this.state.isFetching;
    return (
      <View style={styles.container}>
        <View style={{marginTop: 15}}>
          <FlatList
            data={catagoryNews}
            renderItem={this.renderItem.bind(this)}
            showsVerticalScrollIndicator={false}
            extraData={this.state}
            onRefresh={() => this.onRefresh()}
            refreshing={isFetching}
          />
        </View>
        {catagoryNewsLoading && <Loader />}
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
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
)(CategoriesScreen);
