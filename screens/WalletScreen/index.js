import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, TextInput, Button, Image, FlatList } from 'react-native';

const CardScreen = () => {
  const cards = [{
    id: '1',
    number: '**** **** **** 1234'
  }, {
    id: '2',
    number: '**** **** **** 5678'
  }, {
    id: '3',
    number: '**** **** **** 9012'
  }];
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Add Card</Text>
      <TextInput style={styles.input} placeholder="Card number" />
      <TextInput style={styles.input} placeholder="Expiration date" />
      <TextInput style={styles.input} placeholder="CVV" />
      <TextInput style={styles.input} placeholder="Card holder name" />
      <Button title="Confirm" onPress={() => {}} />

      <Text style={styles.title}>Linked Cards</Text>
      <FlatList data={cards} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.card}>
            <Image style={styles.cardImage} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
            <Text style={styles.cardText}>{item.number}</Text>
            <Button title="Delete" onPress={() => {}} />
            <Button title="Withdraw Money" onPress={() => {}} />
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  cardImage: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  cardText: {
    flex: 1,
    fontSize: 18
  }
});
export default CardScreen;