import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const CounterState = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>You clicked {count} time</Text>
      <Text></Text>
      <Button
        onPress={() => {
          setCount(count + 1);
        }}
        title="+ Counter Up"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CounterState;
