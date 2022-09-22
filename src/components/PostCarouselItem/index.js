import React from 'react';
import {Text, View, Image, useWindowDimensions, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const PostCarouselItem = ({post}) => {
  const {image, bed, bedroom, type, title, newPrice, description, id} = post;
  const width = useWindowDimensions();

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate('Post', {postId: id});
  };

  return (
    <Pressable
      onPress={goToPostPage}
      style={[{width: width.width - 40}, styles.container]}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />

      <View style={styles.postDescription}>
        <Text style={styles.bedrooms}>
          {bed} bed {bedroom} bedroom
        </Text>

        <Text style={styles.descriptions} numberOfLines={2}>
          {type && description && title}
        </Text>

        <Text style={styles.prices}>
          <Text style={styles.price}> ${newPrice}</Text>
          /night
        </Text>
      </View>
    </Pressable>
  );
};

export default PostCarouselItem;
