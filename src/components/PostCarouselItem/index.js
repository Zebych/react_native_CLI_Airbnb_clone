import React from 'react';
import {Text, View, Image, useWindowDimensions} from 'react-native';
import styles from './styles';

const PostCarouselItem = ({post}) => {
  const {image, bed, bedroom, type, title, newPrice, description} = post;
  const width = useWindowDimensions();

  return (
    <View style={[{width: width.width - 100}, styles.container]}>
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
    </View>
  );
};

export default PostCarouselItem;
