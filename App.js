import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Satck.Screen name="Home" component={Home} />
        <Satck.Screen name="About" component={About} />
        <Satck.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
