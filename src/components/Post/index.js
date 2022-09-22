import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';

const Post = ({post}) => {
  const {
    image,
    bed,
    bedroom,
    type,
    title,
    oldPrice,
    newPrice,
    totalPrice,
    description,
  } = post;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />

      <Text style={styles.bedrooms}>
        {bed} bed {bedroom} bedroom
      </Text>

      <Text style={styles.descriptions} numberOfLines={2}>
        {type && description && title}
      </Text>

      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${oldPrice} </Text>
        <Text style={styles.price}> ${newPrice}</Text>
        /night
      </Text>

      <Text style={styles.totalPrice}>${totalPrice} total</Text>
    </View>
  );
};

export default Post;
