import React, {Component} from 'react';
import {View, Dimensions, FlatList, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {connect} from 'react-redux';
import * as actions from '../../../redux/actions';
import Loader from '../../../components/Loader';
import NewsListItem from '../../../components/NewsListItem';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

class NewsScreen extends Component {
  constructor(props) {
    super(props);
    this.page = 1;
    this.onEndReachedCalledDuringMomentum = true;
    this.state = {
      isFetching: false,
      newsList: [],
    };
  }

  async componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevProps.news !== this.props.news &&
      this.props.news &&
      this.props.news.length > 0
    ) {
      const prevItemList = this.state.newsList;
      const newItemList = this.props.news;
      const existingItemList = [...prevItemList];
      existingItemList.push(...newItemList);
      this.setState({
        newsList: existingItemList,
      });
    }

    if (this.state.isFetching) {
      this.setState({
        isFetching: false,
      });
    }
  }

  fetchData() {
    this.page = 1;
    this.props.getNewsData(this.page);
  }

  handleLoadMore = () => {
    let newsTotalResults = this.props.newsTotalResults;

    let pageValue = Math.ceil(newsTotalResults / 20);

    if (
      this.props.news &&
      this.props.news.length > 0 &&
      !this.onEndReachedCalledDuringMomentum &&
      this.page < pageValue
    ) {
      this.page = this.page + 1;
      this.props.getNewsData(this.page);
      this.onEndReachedCalledDuringMomentum = true;
    }
  };

  onRefresh() {
    this.setState({isFetching: true, newsList: []}, function() {
      this.page = 1;
      this.fetchData();
    });
  }

  renderItem(item) {
    return (
      <NewsListItem
        news={item.item}
        defaultImage={false}
        onPress={() => this.onNewsSelect(item)}
      />
    );
  }

  onNewsSelect(item) {
    this.props.navigation.navigate('NewsDetails', {
      newsItem: item,
    });
  }

  render() {
    let newsLoading = this.props.newsLoading;
    let newsList = this.state.newsList;
    let isFetching = this.state.isFetching;

    return (
      <View style={styles.container}>
        {newsLoading ? (
          <Loader />
        ) : (
          <View>
            <Text style={styles.hedingStyle}>Top Coverage</Text>
            <FlatList
              style={styles.flatlistStyle}
              data={newsList}
              renderItem={this.renderItem.bind(this)}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                justifyContent: 'center',
                paddingHorizontal: EStyleSheet.value('4rem'),
                marginVertical: EStyleSheet.value('4rem'),
              }}
              onEndReached={this.handleLoadMore.bind(this)}
              onEndReachedThreshold={0.4}
              extraData={this.state}
              onMomentumScrollBegin={() => {
                this.onEndReachedCalledDuringMomentum = false;
              }}
              onRefresh={() => this.onRefresh()}
              refreshing={isFetching}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  hedingStyle: {
    fontSize: 18,
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  flatlistStyle: {
    marginBottom: 55,
  },
});

const mapStateToProps = state => {
  return {
    news: state.news.news,
    newsLoading: state.news.newsLoading,
    newsTotalResults: state.news.newsTotalResults,
  };
};

export default connect(
  mapStateToProps,
  actions,
)(NewsScreen);
