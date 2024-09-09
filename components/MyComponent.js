import {View, Text} from 'react-native';
import React from 'react';
import styles from '../themes/Style';

const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>This is MyComponent</Text>
      <Text>Lorem ipsum dolor sit, amet consectetur adipisicing</Text>
      <Text>Lorem ipsum dolor sit amet.</Text>
    </View>
  );
};

export default MyComponent;
