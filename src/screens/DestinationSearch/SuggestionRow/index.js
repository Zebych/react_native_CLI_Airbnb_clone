import React from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from '../styles';

import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const SuggestionRow = ({description}) => {
  const navigate = useNavigation();

  return (
    <Pressable onPress={() => navigate.navigate('Guests')} style={styles.row}>
      <View style={styles.iconContainer}>
        <Entypo name={'location-pin'} size={30} />
      </View>
      <Text style={styles.locationText}>{description}</Text>
    </Pressable>
  );
};

export default SuggestionRow;
