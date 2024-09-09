import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AlertComponent = () => {
  const btnClick = () => {
    Alert.alert('ยันยืนการลบรายการนี้', 'ต้องการลบรายการนี้', [
      {
        text: 'ตกลง',
        onPress: () => {
          alert('คุณกดตกลง');
        },
      },
      {
        text: 'ยกเลิก',
        onPress: () => {
          alert('คุณกดยกเลิก');
        },
      },
      {
        text: 'ภายหลัง',
        onPress: () => {
          alert('คุณกดภายหลัง');
        },
      },
    ]);
  };

  return (
    <View>
      <Button title="Show Alert" onPress={btnClick} />
    </View>
  );
};

export default AlertComponent;

const styles = StyleSheet.create({});
