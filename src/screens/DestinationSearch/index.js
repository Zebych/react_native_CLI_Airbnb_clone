import React, {useState} from 'react';
import {FlatList, TextInput, View} from 'react-native';
import styles from './styles.js';
import searchResults from '../../../assets/data/search';
import SuggestionRow from './SuggestionRow';

const DestinationSearchScreen = () => {
  const [inputText, setInputText] = useState('');

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
          return <SuggestionRow description={item.description} />;
        }}
      />
    </View>
  );
};

export default DestinationSearchScreen;
