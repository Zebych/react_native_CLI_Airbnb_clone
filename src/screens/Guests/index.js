import React from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './styles';
import Guest from './Guest';
import {useNavigation} from '@react-navigation/native';

const GuestsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Guest category={'Adults '} description={'Ages 13 or above '} />
        <Guest category={'Children '} description={'Ages 2-12 '} />
        <Guest category={'Infants '} description={'Under 2'} />
      </View>
      <View>
        <Pressable
          onPress={() =>
            navigation.navigate('Home', {
              screen: 'Explore',
              params: {
                screen: 'SearchResults',
              },
            })
          }
          style={styles.pressBlock}>
          <Text style={styles.pressBlockText}>Search</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default GuestsScreen;
