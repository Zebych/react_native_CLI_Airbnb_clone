import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import styles from './styles';

const DetailedPost = ({post}) => {
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
    <ScrollView>
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
        <Text style={styles.longDescriptions}>${post.description}</Text>
      </View>
    </ScrollView>
  );
};

export default DetailedPost;
