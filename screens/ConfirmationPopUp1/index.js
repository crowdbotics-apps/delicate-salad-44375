import React from 'react';
import { SafeAreaView, View, Text, Image, Button, StyleSheet } from 'react-native';

const RewardScreen = () => {
  const reward = {
    name: 'Selected Reward',
    points: 100
  };
  return <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.title}>Transaction Status:</Text>
        <Text style={styles.message}>
          Congratulations! You've redeemed {reward.points} points for {reward.name}.
        </Text>
        <Button title="Back" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center'
  }
});
export default RewardScreen;