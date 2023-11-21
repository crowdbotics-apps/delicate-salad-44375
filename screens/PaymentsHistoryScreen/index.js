import React from 'react';
import { SafeAreaView, View, Text, Image, Button, StyleSheet, ScrollView, TextInput } from 'react-native';

const PaymentHistoryScreen = () => {
  const dummyData = [{
    payer: 'John Doe',
    date: '2021-09-01 10:00',
    amount: 100
  }, {
    payer: 'Jane Doe',
    date: '2021-09-02 11:00',
    amount: 200
  }, {
    payer: 'John Smith',
    date: '2021-09-03 12:00',
    amount: 300
  }];
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        {dummyData.map((payment, index) => <View key={index} style={styles.paymentCard}>
            <Text style={styles.paymentText}>Payer: {payment.payer}</Text>
            <Text style={styles.paymentText}>Date: {payment.date}</Text>
            <Text style={styles.paymentText}>Amount: {payment.amount}</Text>
            <Button title="Download Receipt" onPress={() => {}} />
          </View>)}
      </ScrollView>
      <View style={styles.datePicker}>
        <TextInput placeholder="From" style={styles.dateInput} />
        <TextInput placeholder="To" style={styles.dateInput} />
        <Button title="Download" onPress={() => {}} />
      </View>
      <Button title="Download Full Report" onPress={() => {}} />
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5'
  },
  paymentCard: {
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5
  },
  paymentText: {
    fontSize: 16,
    marginBottom: 5
  },
  datePicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  dateInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    paddingLeft: 10
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain'
  }
});
export default PaymentHistoryScreen;