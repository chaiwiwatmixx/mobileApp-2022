import {StyleSheet, Text, TextInput, View, Button, Alert} from 'react-native';
import React, {useState} from 'react';

const TextInputDemo = () => {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputMemo, setInputMemo] = useState('');

  const onPressButton = () => {
    let msg = 'บันทึกข้อมูลเรียบร้อย';
    if (inputName === '') {
      msg = 'กรุณาป้อนชื่อก่อน';
    } else if (inputEmail === '') {
      msg = 'กรุณาป้อนอีเมลก่อน';
    } else if (inputPassword === '') {
      msg = 'กรุณาป้อนรหัสก่อน';
    }
    Alert.alert('มีข้อผิดพลาด', msg, [
      {
        text: 'ตกลง',
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24, marginBottom: 20}}>Register</Text>
      <View style={styles.items}>
        <Text>Name</Text>
        <TextInput
          style={styles.textInput}
          defaultValue={inputName}
          onChangeText={setInputName}
          // keyboardType="phone-pad"
          keyboardType="email-pad"
        />
      </View>
      <View style={styles.items}>
        <Text>Email</Text>
        <TextInput
          style={styles.textInput}
          defaultValue={inputEmail}
          onChangeText={setInputEmail}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.items}>
        <Text>Password</Text>
        <TextInput
          style={styles.textInput}
          defaultValue={inputPassword}
          secureTextEntry={true}
          onChangeText={setInputPassword}
        />
      </View>
      <View style={styles.items}>
        <Text>Memo</Text>
        <TextInput
          style={[styles.textInput, {height: 100}]}
          multiline={true}
          numberOfLines={5}
          defaultValue={inputMemo}
          textAlignVertical="top"
          onChangeText={setInputMemo}
        />
      </View>
      <View style={styles.items}>
        <Button title="บันทึกข้อมูล" onPress={onPressButton} />
      </View>
    </View>
  );
};

export default TextInputDemo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  items: {
    marginBottom: 5,
  },
  textInput: {
    height: 36,
    color: 'black',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#aaa',
    marginTop: 5,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 20,
    borderRadius: 18,
  },
});
