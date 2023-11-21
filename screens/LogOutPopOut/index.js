import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Button } from 'react-native';

const LogoutScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.text}>Are you sure you want to Log Out?</Text>
        <View style={styles.buttonContainer}>
          <Button title="Yes" onPress={() => {}} />
          <Button title="Cancel" onPress={() => {}} />
        </View>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  }
});
export default LogoutScreen;