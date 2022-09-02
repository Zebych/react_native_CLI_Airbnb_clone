import React, {useState} from 'react';
import {FlatList, Pressable, Text, TextInput, View} from 'react-native';
import styles from './styles.js';
import searchResults from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const DestinationSearchScreen = () => {
  const [inputText, setInputText] = useState('');
  const navigate = useNavigation();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={'where are you going?'}
        value={inputText}
        onChangeText={setInputText}
      />

      <FlatList
        data={searchResults}
        renderItem={({item}) => {
          return (
            <Pressable
              onPress={() => navigate.navigate('Guests')}
              style={styles.row}>
              <View style={styles.iconContainer}>
                <Entypo name={'location-pin'} size={30} />
              </View>
              <Text style={styles.locationText}>{item.description}</Text>
            </Pressable>
          );
        }}
      />
    </View>
  );
};

export default DestinationSearchScreen;
