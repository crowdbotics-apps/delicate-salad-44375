import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const LoadScreen = () => {
  const [customAmount, setCustomAmount] = useState('');
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.title}>Specify the amount you would like to load</Text>
      <View style={styles.buttonContainer}>
        <Button title="Amount- currency" onPress={() => {}} />
        <Button title="Amount- currency" onPress={() => {}} />
        <Button title="Amount- currency" onPress={() => {}} />
      </View>
      <TextInput style={styles.input} onChangeText={setCustomAmount} value={customAmount} placeholder="Custom" keyboardType="numeric" />
      <Text style={styles.totalCost}>Total cost: {customAmount}</Text>
      <Button title="Load Up" onPress={() => {}} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 20
  },
  totalCost: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20
  }
});
export default LoadScreen;