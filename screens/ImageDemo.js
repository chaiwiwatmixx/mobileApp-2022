import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ImageDemo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/auto-2179220_1920.jpg')}
        resizeMode="cover"
        style={styles.img}
      />
      <Image
        source={require('../assets/Edinson-Cavani1.jpg')}
        resizeMode="cover"
        style={styles.img}
      />
    </View>
  );
};

export default ImageDemo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: 70,
  },
  items: {
    marginBottom: 20,
  },
  img: {
    width: 140,
    height: 140,
    borderWidth: 1,
    borderColor: 'red',
  },
});
