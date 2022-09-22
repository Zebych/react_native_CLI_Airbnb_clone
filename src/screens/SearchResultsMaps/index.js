import React from 'react';
import {FlatList, ImageBackground, View} from 'react-native';
import feed from '../../../assets/data/feed';
import styles from './styles';
import PostCarouselItem from '../../components/PostCarouselItem';

const SearchResultsMapsScreen = () => {
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
        />
      </View>
    </ImageBackground>
  );
};

export default SearchResultsMapsScreen;
