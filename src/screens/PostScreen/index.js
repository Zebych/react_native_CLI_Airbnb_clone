import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import places from '../../../assets/data/feed';
import DetailedPost from '../../components/DetailedPost';
import {useRoute} from '@react-navigation/native';

const PostScreen = () => {
  const route = useRoute();
  const postId = route.params.postId;

  const post = places.find(place => place.id === postId);

  return (
    <View style={styles.postBlock}>
      <DetailedPost post={post} />
    </View>
  );
};

export default PostScreen;
