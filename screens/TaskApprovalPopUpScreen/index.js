import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, Button } from 'react-native';

const TaskScreen = ({
  navigation
}) => {
  const task = {
    description: 'This is a sample task description',
    image: 'https://tinyurl.com/42evm3m3',
    points: 100
  };

  const handleApprove = () => {
    navigation.navigate('PaymentScreen');
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Task Description</Text>
      <Text style={styles.description}>{task.description}</Text>
      <Image style={styles.image} source={{
      uri: task.image
    }} />
      <Text style={styles.title}>Task Points</Text>
      <Text style={styles.points}>{task.points}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Approve" onPress={handleApprove} />
      </View>
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
    color: '#333',
    marginBottom: 10
  },
  description: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20
  },
  points: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF6347',
    marginBottom: 20
  },
  buttonContainer: {
    marginTop: 20
  }
});
export default TaskScreen;