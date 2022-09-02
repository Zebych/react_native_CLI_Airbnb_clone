import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './styles';

const Guest = ({category, description}) => {
  const [amount, setAmount] = useState(0);
  return (
    <View style={styles.row}>
      <View>
        <Text style={styles.ageCategory}>{category}</Text>
        <Text style={styles.categoryDescription}>{description}</Text>
      </View>
      <View style={styles.buttonBlock}>
        <Pressable
          onPress={() => setAmount(Math.max(0, amount - 1))}
          style={styles.button}>
          <Text>-</Text>
        </Pressable>
        <Text style={styles.amount}>{amount}</Text>
        <Pressable onPress={() => setAmount(amount + 1)} style={styles.button}>
          <Text style={styles.signs}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Guest;
