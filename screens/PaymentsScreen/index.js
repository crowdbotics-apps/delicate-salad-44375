import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Button, StyleSheet, Picker } from 'react-native';

const PaymentScreen = ({
  navigation
}) => {
  const [amount, setAmount] = useState('');
  const [selectedCard, setSelectedCard] = useState('');
  const cards = ['Card 1', 'Card 2', 'Card 3'];
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Payment</Text>
      <TextInput style={styles.input} onChangeText={setAmount} value={amount} placeholder="Payment Amount" keyboardType="numeric" />
      <Text style={styles.text}>Choose a payment option from the dropdown menu:</Text>
      <Picker selectedValue={selectedCard} style={styles.picker} onValueChange={itemValue => setSelectedCard(itemValue)}>
        {cards.map((card, index) => <Picker.Item key={index} label={card} value={card} />)}
      </Picker>
      <Button title="Add a new card" onPress={() => navigation.navigate('AddCard')} />
      <Button title="Pay" onPress={() => alert('Payment Successful')} />
      <Button title="Cancel" onPress={() => navigation.goBack()} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 20
  },
  text: {
    fontSize: 18,
    color: '#000',
    marginBottom: 10
  },
  picker: {
    height: 50,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20
  }
});
export default PaymentScreen;