import React from 'react';
import {View, Animated, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});
const styles = EStyleSheet.create({
  imageOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    borderRadius: '35rem',
  },
  container: {
    backgroundColor: '#ffffff',
    borderRadius: '35rem',
  },
});

class ProgressiveImageRound extends React.Component {
  // eslint-disable-next-line no-undef
  thumbnailAnimated = new Animated.Value(0.5);

  // eslint-disable-next-line no-undef
  imageAnimated = new Animated.Value(0);

  // eslint-disable-next-line no-undef
  handleThumbnailLoad = () => {
    Animated.timing(this.thumbnailAnimated, {
      toValue: 1,
    }).start();
  };

  // eslint-disable-next-line no-undef
  onImageLoad = () => {
    Animated.timing(this.imageAnimated, {
      toValue: 1,
    }).start();
  };

  render() {
    const {thumbnailSource, source, style, ...props} = this.props;

    return (
      <View style={styles.container}>
        <Animated.Image
          {...props}
          source={thumbnailSource}
          style={[style, {opacity: this.thumbnailAnimated}]}
          onLoad={this.handleThumbnailLoad}
          blurRadius={1}
        />
        <Animated.Image
          {...props}
          source={source}
          style={[style, styles.imageOverlay, {opacity: this.imageAnimated}]}
          onLoad={this.onImageLoad}
        />
      </View>
    );
  }
}

export default ProgressiveImageRound;
