import {StyleSheet, Switch, Text, View} from 'react-native';
import React, {useState} from 'react';

const SwitchDemo = () => {
  const [switchBluetooth, setSwitchBluetooth] = useState(false);
  const [switchWiFi, setSwitchWiFi] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.items}>
        <Text style={styles.text}>Bluetooth</Text>
        <Switch value={switchBluetooth} onValueChange={setSwitchBluetooth} />
      </View>
      <Text style={{marginBottom: 20}}>
        Bluetooth: {JSON.stringify(switchBluetooth ? 'NO' : 'OFF')}
      </Text>
      <View style={styles.items}>
        <Text style={styles.text}>WiFi</Text>
        <Switch value={switchWiFi} onValueChange={setSwitchWiFi} />
      </View>
      <Text>WiFi: {JSON.stringify(switchWiFi ? 'NO' : 'OFF')}</Text>
    </View>
  );
};

export default SwitchDemo;

const styles = StyleSheet.create({
  container: {flex: 1, marginTop: 70, marginLeft: 20, marginRight: 20},
  items: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {fontSize: 18},
});
