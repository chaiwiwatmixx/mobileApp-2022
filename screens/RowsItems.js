import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const RowsItems = () => {
  const items = [
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
  ];

  return (
    <View style={styles.container}>
      {items.map((item, i) => {
        return (
          <View key={i} style={styles.items}>
            <Text style={styles.text}>{item}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
  },
  items: {
    height: 100,
    width: 100,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  text: {
    color: 'blue',
    fontSize: 20,
  },
});

export default RowsItems;
