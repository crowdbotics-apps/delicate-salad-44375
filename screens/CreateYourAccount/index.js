import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, TextInput, Button, CheckBox, Text, TouchableOpacity } from 'react-native';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSelected, setSelection] = useState(false);
  return <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} onChangeText={setUsername} value={username} placeholder="Username" />
        <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder="Password" secureTextEntry />
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox value={isSelected} onValueChange={setSelection} style={styles.checkbox} />
        <Text style={styles.label}>I agree to the </Text>
        <TouchableOpacity>
          <Text style={styles.link}>Terms and Conditions</Text>
        </TouchableOpacity>
        <Text style={styles.label}> and </Text>
        <TouchableOpacity>
          <Text style={styles.link}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
      <Button title="Sign Up" />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16
  },
  inputContainer: {
    marginBottom: 32
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  checkbox: {
    alignSelf: 'center'
  },
  label: {
    margin: 8
  },
  link: {
    color: 'blue'
  }
});
export default SignUpScreen;