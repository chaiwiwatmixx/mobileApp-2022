import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ColumnItems = () => {
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
    'Ten',
    'Elevenn',
  ];

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        {items.map((item, i) => {
          return (
            <View key={i} style={styles.items}>
              <Text>{item}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
  },
  items: {
    justifyContent: 'center',
    backgroundColor: 'lightgray',
    height: 60,
    marginBottom: 15,
    paddingLeft: 10,
  },
  text: {
    color: 'blue',
    fontSize: 20,
  },
});

export default ColumnItems;
