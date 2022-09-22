import React from 'react';
import {
  FlatList,
  ImageBackground,
  useWindowDimensions,
  View,
} from 'react-native';
import feed from '../../../assets/data/feed';
import styles from './styles';
import PostCarouselItem from '../../components/PostCarouselItem';

const SearchResultsMapsScreen = () => {
  const width = useWindowDimensions();
  return (
    <ImageBackground
      source={require('../../../assets/images/home_background.jpg')}
      style={styles.image}>
      <View style={styles.carouselBlock}>
        <FlatList
          data={feed}
          renderItem={({item}) => <PostCarouselItem post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width.width - 60}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          viewabilityConfig={{itemVisiblePercentThreshold: 70}}
          onViewableItemsChanged={({viewableItems}) => {
            console.log(viewableItems);
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default SearchResultsMapsScreen;
