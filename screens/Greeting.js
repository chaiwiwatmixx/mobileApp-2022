import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ShowGreeting = props => {
  return (
    <View>
      <Text>
        Hello {props.name} Your age is {props.age}
      </Text>
    </View>
  );
};

const Greeting = () => {
  return (
    <View style={[styles.center, {top: 50}]}>
      <Text>Hello</Text>
      <ShowGreeting name="Tony" age="45" />
      <ShowGreeting name="gaga" age={30 + 2} />
      <ShowGreeting name="niky" age={42} />
    </View>
  );
};

export default Greeting;

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
});
