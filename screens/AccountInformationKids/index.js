import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, TextInput, Button, Image, Picker } from 'react-native';

const ScreenComponent = () => {
  const [nickname, setNickname] = useState('');
  const [age, setAge] = useState('');
  const [gradeLevel, setGradeLevel] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('https://tinyurl.com/42evm3m3');
  return <SafeAreaView style={_styles.NuzMBSwK}>
      <Button title="Back" onPress={() => {}} />
      <TextInput placeholder="Nickname or Username" onChangeText={setNickname} value={nickname} />
      <TextInput placeholder="Age" onChangeText={setAge} value={age} />
      <TextInput placeholder="Grade Level" onChangeText={setGradeLevel} value={gradeLevel} />
      <Picker selectedValue={gender} onValueChange={itemValue => setGender(itemValue)}>
        <Picker.Item label="Female" value="female" />
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Prefer not to say" value="notsay" />
      </Picker>
      <TextInput placeholder="Phone number" onChangeText={setPhoneNumber} value={phoneNumber} />
      <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
      <Image source={{
      uri: avatar
    }} style={_styles.yUEqDLcO} />
      <Button title="Edit" onPress={() => {}} />
      <Button title="Save" onPress={() => {}} />
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  NuzMBSwK: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  yUEqDLcO: {
    width: 100,
    height: 100
  }
});